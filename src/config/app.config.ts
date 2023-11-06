interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Freelancer'],
  tenantRoles: ['Owner', 'Recruiter'],
  tenantName: 'Company',
  applicationName: 'Upworx3',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Apply for jobs', 'Edit application', 'Delete application', 'View job details'],
  ownerAbilities: ['Manage jobs', 'Manage applications', 'Manage users', 'Manage companies'],
  getQuoteUrl: 'https://app.roq.ai/proposal/5f264c98-6f7e-46b7-824c-1cd9ca353d79',
};
