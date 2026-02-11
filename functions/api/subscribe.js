// Cloudflare Pages Function — handles newsletter subscriptions
// Stores emails in KV namespace "SUBSCRIBERS"

export async function onRequestPost(context) {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  try {
    const contentType = context.request.headers.get("content-type") || "";
    let email;

    if (contentType.includes("application/json")) {
      const body = await context.request.json();
      email = body.email;
    } else if (contentType.includes("form")) {
      const form = await context.request.formData();
      email = form.get("email");
    }

    if (!email || !email.includes("@") || email.length < 5) {
      return new Response(JSON.stringify({ ok: false, error: "Invalid email" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    email = email.trim().toLowerCase();

    const kv = context.env.SUBSCRIBERS;
    
    if (kv) {
      // Check if already subscribed
      const existing = await kv.get(email);
      if (existing) {
        return new Response(JSON.stringify({ ok: true, message: "Already subscribed!" }), {
          headers: { "Content-Type": "application/json", ...corsHeaders },
        });
      }
      // Store with metadata
      await kv.put(email, JSON.stringify({
        subscribedAt: new Date().toISOString(),
        source: "netstatman.com",
      }));
    }
    
    // Always log
    console.log(`NEW SUBSCRIBER: ${email} at ${new Date().toISOString()}`);

    return new Response(JSON.stringify({ ok: true, message: "Subscribed!" }), {
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
}

// Handle CORS preflight
export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
