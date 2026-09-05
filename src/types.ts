export interface GymInfo {
  name: string;
  hindiName: string;
  rating: number;
  totalReviews: number;
  openingTime: string;
  phone: string;
  phoneDisplay: string;
  whatsappNumber: string;
  address: {
    street: string;
    landmark: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    full: string;
  };
  tagline: string;
  headline: string;
  supportingText: string;
  googleMapsUrl: string;
  googleMapsEmbedUrl: string;
  whatsappLink: string;
  telLink: string;
}

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlightBadge?: string;
}

export interface FacilityCard {
  id: string;
  title: string;
  description: string;
  category: 'Equipment' | 'Space' | 'Training' | 'Environment';
  iconName: string;
}

export interface TrainingPillar {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ReviewTheme {
  id: string;
  theme: string;
  description: string;
  iconName: string;
  tag: string;
}

export interface ContactFormState {
  fullName: string;
  phone: string;
  fitnessGoal: string;
  preferredTime: string;
  message: string;
}
