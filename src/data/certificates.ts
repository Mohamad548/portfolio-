import type { CertificateBase } from "./types";

export const certificates = [
  { id: "maktab-react", image: "/images/maktab-certificate.jpg" },
] as const satisfies readonly CertificateBase[];

export type CertificateId = (typeof certificates)[number]["id"];
