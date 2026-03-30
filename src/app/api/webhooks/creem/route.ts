import { Webhook } from "@creem_io/nextjs";
import { webhookHandlers } from "@/features/billing/webhooks";

export async function POST(request: Request) {
  const webhookSecret = process.env.CREEM_WEBHOOK_SECRET ?? "";

  const cloned = new Request(request.url, {
    method: request.method,
    headers: request.headers,
    body: await request.text(),
  });

  return Webhook({ webhookSecret, ...webhookHandlers })(cloned);
}
