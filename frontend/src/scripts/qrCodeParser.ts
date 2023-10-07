interface QRCode {
	type: "login" | "game",
	data: string
}

export function parseQrCode(code: string): QRCode {
	return JSON.parse(code);
}
