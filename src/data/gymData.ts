import { GymInfo, FeatureCard, FacilityCard, TrainingPillar, ReviewTheme } from '../types';

export const GYM_DATA: GymInfo = {
  name: 'One Edge Fitness',
  hindiName: 'वन एज फिटनेस',
  rating: 5.0,
  totalReviews: 36,
  openingTime: 'Opens at 5:00 AM',
  phone: '08651692256',
  phoneDisplay: '086516 92256',
  whatsappNumber: '918651692256',
  address: {
    street: 'Singrahi Pokhara',
    landmark: 'Near Bus Stand',
    area: 'Sohani Patti',
    city: 'Buxar',
    state: 'Bihar',
    pincode: '802101',
    full: 'SINGRAHI POKHARA, Near Bus Stand, Sohani Patti, Buxar, Bihar – 802101',
  },
  tagline: 'Providing a better platform to achieve fitness goals',
  headline: 'Your Strength. Your Fitness. Your Edge.',
  supportingText: 'Providing a better platform to achieve fitness goals.',
  googleMapsUrl: 'https://maps.app.goo.gl/4WRGT8crYiFqa4tS8?g_st=ac',
  googleMapsEmbedUrl: 'https://maps.google.com/maps?q=Singrahi+Pokhara+Near+Bus+Stand+Sohani+Patti+Buxar+Bihar+802101&t=&z=16&ie=UTF8&iwloc=&output=embed',
  whatsappLink: 'https://wa.me/918651692256?text=Hi%20One%20Edge%20Fitness%2C%20I%20would%20like%20to%20know%20more%20about%20membership%20and%20facilities.',
  telLink: 'tel:08651692256',
};

export const ABOUT_TEXT = {
  p1: 'One Edge Fitness is a modern and spacious gym in Sohani Patti, Buxar, designed to provide members with a quality workout environment and the right platform to achieve their fitness goals.',
  p2: 'Visitors appreciate the supportive trainers who provide individual attention and useful guidance. Members also highlight the wide variety of modern machines, free weights, cardio equipment and resistance machines available at the gym.',
  p3: 'The gym combines quality equipment, knowledgeable trainers, a healthy environment and affordable membership options.',
};

export const WHY_CHOOSE_ITEMS: FeatureCard[] = [
  {
    id: 'supportive-trainers',
    title: 'Supportive Trainers',
    description: "Trainers provide individual attention and guidance according to members' fitness goals.",
    iconName: 'Users',
    highlightBadge: 'Individual Attention',
  },
  {
    id: 'modern-equipment',
    title: 'Modern Equipment',
    description: 'Wide variety of modern machines, cardio equipment, free weights and resistance machines.',
    iconName: 'Dumbbell',
    highlightBadge: 'Full Variety',
  },
  {
    id: 'spacious-workout',
    title: 'Spacious Workout Area',
    description: 'A comfortable and spacious environment for workouts.',
    iconName: 'Maximize2',
    highlightBadge: 'Airy & Open',
  },
  {
    id: 'affordable-membership',
    title: 'Affordable Membership',
    description: 'Premium gym experience with highly affordable membership rates.',
    iconName: 'Sparkles',
    highlightBadge: 'Value for Money',
  },
  {
    id: 'healthy-environment',
    title: 'Healthy Environment',
    description: 'Create a positive and motivating workout atmosphere.',
    iconName: 'ShieldCheck',
    highlightBadge: 'Motivating Vibe',
  },
  {
    id: 'personal-attention',
    title: 'Personal Attention',
    description: 'Members can receive guidance and training tips from knowledgeable trainers.',
    iconName: 'Target',
    highlightBadge: 'Goal Focused',
  },
];

export const FACILITIES_ITEMS: FacilityCard[] = [
  {
    id: 'modern-machines',
    title: 'Modern Gym Machines',
    description: 'Advanced, smooth-motion selectorized equipment for targeted muscle training and ergonomics.',
    category: 'Equipment',
    iconName: 'Zap',
  },
  {
    id: 'cardio-equipment',
    title: 'Cardio Equipment',
    description: 'Dedicated machines for cardiovascular conditioning, stamina building, and caloric burn.',
    category: 'Equipment',
    iconName: 'Flame',
  },
  {
    id: 'free-weights',
    title: 'Free Weights',
    description: 'Extensive range of dumbbells, Olympic barbells, and weight plates for classic compound lifts.',
    category: 'Equipment',
    iconName: 'Dumbbell',
  },
  {
    id: 'resistance-machines',
    title: 'Resistance Machines',
    description: 'Biomechanical resistance stations and cable units for controlled, progressive muscle overload.',
    category: 'Equipment',
    iconName: 'Activity',
  },
  {
    id: 'spacious-workout-area',
    title: 'Spacious Workout Area',
    description: 'Generously proportioned floor layout ensuring ample room between workout stations with zero clutter.',
    category: 'Space',
    iconName: 'Maximize2',
  },
  {
    id: 'strength-training-area',
    title: 'Strength Training Area',
    description: 'Purpose-built heavy-lifting zone with shock-absorbing flooring and solid benching setups.',
    category: 'Space',
    iconName: 'Shield',
  },
  {
    id: 'supportive-training',
    title: 'Supportive Training',
    description: 'Encouraging trainers readily on hand to explain form, assist with spotting, and motivate.',
    category: 'Training',
    iconName: 'HeartHandshake',
  },
  {
    id: 'clean-healthy-environment',
    title: 'Clean & Healthy Environment',
    description: 'Regularly sanitized, well-ventilated, hygienic, and upbeat fitness center for daily workouts.',
    category: 'Environment',
    iconName: 'Sparkles',
  },
];

export const TRAINING_SECTION = {
  title: 'Train Smarter. Get Stronger.',
  subtitle: 'Supportive trainers providing individual attention and useful training tips to help you execute every exercise effectively.',
  pillars: [
    {
      id: 'individual-guidance',
      title: 'Individual Guidance',
      description: 'Personalized attention from knowledgeable trainers to ensure your workout aligns directly with your current fitness level.',
      iconName: 'UserCheck',
    },
    {
      id: 'workout-support',
      title: 'Workout Support',
      description: 'Hands-on assistance with machine adjustments, proper posture, exercise pacing, and safe execution.',
      iconName: 'LifeBuoy',
    },
    {
      id: 'fitness-goal-guidance',
      title: 'Fitness Goal Guidance',
      description: 'Structured advice on daily exercise routines and healthy fitness habits tailored to what you want to achieve.',
      iconName: 'Compass',
    },
    {
      id: 'training-tips',
      title: 'Training Tips',
      description: 'Practical, actionable tips on warm-ups, progressive load, recovery, and workout consistency.',
      iconName: 'Lightbulb',
    },
  ] as TrainingPillar[],
};

export const REVIEW_THEMES: ReviewTheme[] = [
  {
    id: '1',
    theme: 'Supportive Trainers',
    description: 'Visitors consistently highlight that trainers are polite, encouraging, and provide hands-on individual attention.',
    iconName: 'Award',
    tag: '5.0 Rating Highlight',
  },
  {
    id: '2',
    theme: 'Good Machine Availability',
    description: 'Members appreciate that equipment is well-maintained and readily accessible for smooth workout sessions.',
    iconName: 'CheckCircle2',
    tag: 'Top Feedback',
  },
  {
    id: '3',
    theme: 'Quality Equipment',
    description: 'Praised for high-grade machines, free weights, and resistance gear that feel sturdy and professional.',
    iconName: 'Dumbbell',
    tag: 'Member Favorite',
  },
  {
    id: '4',
    theme: 'Fitness Goal Support',
    description: 'Trainers take time to understand personal goals and guide members through constructive routines.',
    iconName: 'Target',
    tag: 'Goal Focused',
  },
  {
    id: '5',
    theme: 'Spacious Environment',
    description: 'Members love the spacious floor plan in Sohani Patti which avoids crowding and maintains good airflow.',
    iconName: 'Maximize2',
    tag: 'Comfort & Space',
  },
  {
    id: '6',
    theme: 'Healthy Workout Environment',
    description: 'A disciplined, clean, and motivating atmosphere where both beginners and regular lifters feel comfortable.',
    iconName: 'ShieldCheck',
    tag: 'Positive Atmosphere',
  },
  {
    id: '7',
    theme: 'Affordable Membership',
    description: 'Recognized as delivering a premium gym experience with very budget-friendly, value-driven rates.',
    iconName: 'Sparkles',
    tag: 'High Value',
  },
  {
    id: '8',
    theme: 'Positive Training Experience',
    description: 'Overall seamless experience with welcoming staff, encouraging fellow members, and motivating vibes.',
    iconName: 'ThumbsUp',
    tag: 'Verified Experience',
  },
];
