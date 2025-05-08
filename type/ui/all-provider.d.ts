export interface Provider {
    id: string;
    name: string;
    logo: React.ReactNode;
}

export interface AllProvidersProps {
    providers: Provider[];
}
