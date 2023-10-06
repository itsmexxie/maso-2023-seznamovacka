interface QRCode {
	type: "login" | "task",
	data: string
}

export function parseQrCode(code: string): QRCode {
	return JSON.parse(code);
}
