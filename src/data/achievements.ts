export interface Achievement {
  id: string;
  title: string;
  date: string;
  description: string;
  category: 'Award' | 'Certification' | 'Publication' | 'Speaking' | 'Other';
  issuer?: string;
  url?: string;
  icon?: string;
}

export const achievementsData: Achievement[] = [
  {
    id: "achieve-aws-cert",
    title: "AWS Certified Developer – Associate",
    date: "2023-05",
    description: "Successfully passed the AWS Certified Developer exam, demonstrating proficiency in developing, deploying, and debugging cloud-based applications using AWS.",
    category: "Certification",
    issuer: "Amazon Web Services",
    url: "https://aws.amazon.com/certification/",
    icon: "aws-icon"
  },
  {
    id: "achieve-hackathon",
    title: "1st Place - Global Tech Hackathon",
    date: "2022-10",
    description: "Built an AI-driven accessibility tool that won first place among 500+ participating teams.",
    category: "Award",
    issuer: "Tech Innovators Network",
    icon: "trophy-icon"
  }
];
