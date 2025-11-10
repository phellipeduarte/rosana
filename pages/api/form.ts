import type { NextApiRequest, NextApiResponse } from "next";

interface FormData {
    name: string;
    email: string;
    phone: string;
    modality: string;
    message: string;
    hp?: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Método não permitido" });
    }

    try {
        const data: FormData = JSON.parse(req.body);

        if (data.hp && data.hp.trim() !== "") {
            return res.status(200).json({ message: "SPAM" });
        }

        const payload = {
            ...data,
            token: process.env.GOOGLE_FORM_TOKEN,
        };

        const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
        if (!scriptUrl) {
            throw new Error("GOOGLE_SCRIPT_URL não configurada");
        }

        const response = await fetch(scriptUrl, {
            method: "POST",
            body: JSON.stringify(payload)
        });

        const text = await response.text();

        if (response.ok && text.trim() === "OK") {
            return res.status(200).json({ message: "OK" });
        }

        return res.status(500).json({ error: text });
    } catch (error: any) {
        console.error("Erro ao enviar formulário:", error);
        return res.status(500).json({ error: "Erro interno no servidor" });
    }
}
