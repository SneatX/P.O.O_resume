interface NotificationService {
    send(message: string, recipient: string): Promise<boolean>;
}

class EmailService implements NotificationService {
    async send(message: string, recipient: string): Promise<boolean> {
        // Lógica para enviar email via SMTP/API
        return true;
    }
}

class SMSService implements NotificationService {
    async send(message: string, recipient: string): Promise<boolean> {
        // Lógica para enviar SMS via Twilio
        return true;
    }
}