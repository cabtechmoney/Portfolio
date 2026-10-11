import type { SVGProps } from "react";

export type IconComponent = (props: SVGProps<SVGSVGElement>) => React.ReactNode;

function Icon({ children, ...props }: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{children}</svg>;
}

const pathIcon = (path: React.ReactNode): IconComponent => (props) => <Icon {...props}>{path}</Icon>;
export const ArrowRight = pathIcon(<><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>);
export const ArrowUp = pathIcon(<><path d="M12 19V5" /><path d="m5 12 7-7 7 7" /></>);
export const Send = pathIcon(<><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></>);
export const Download = pathIcon(<><path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M5 21h14" /></>);
export const Code2 = pathIcon(<><path d="m8 9-3 3 3 3" /><path d="m16 9 3 3-3 3" /><path d="m14 5-4 14" /></>);
export const Mail = pathIcon(<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>);
export const MapPin = pathIcon(<><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2" /></>);
export const Briefcase = pathIcon(<><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V4h8v3" /></>);
export const BriefcaseBusiness = Briefcase;
export const Globe = pathIcon(<><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></>);
export const Sparkles = pathIcon(<><path d="m12 3-1.5 5.5L5 10l5.5 1.5L12 17l1.5-5.5L19 10l-5.5-1.5Z" /></>);
export const Github = Code2;
export const Loader2 = pathIcon(<circle cx="12" cy="12" r="8" />);
export const ShieldCheck = Code2;
export const Zap = Sparkles;
export const Cpu = Code2;
export const Rocket = ArrowUp;
export const Users = Briefcase;
export const Server = Code2;
export const Database = Code2;
export const Brain = Code2;
export const Shield = ShieldCheck;
