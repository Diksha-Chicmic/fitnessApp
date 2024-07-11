export interface CardProps{
    title: string;
    onPress: () => void;
    percentage: number;
    icon: (size: { width: number; height: number; color?: string }) => React.ReactNode;
    point: string;
 }