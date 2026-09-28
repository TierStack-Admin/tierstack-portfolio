import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ContactHeader from './components/ContactHeader';
import TabSwitcher from './components/TabSwitcher';
import GeneralInquiryForm from './components/GeneralInquiryForm';
import RequestServicesWizard from './components/RequestServices/RequestServicesWizard';
import ContactSidebar from './components/ContactSidebar';

const ContactUs = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Active tab state ("general" vs "request") synced with URL query parameter
  const initialTab = searchParams.get('tab') === 'request' ? 'request' : 'general';
  const [activeTab, setActiveTab] = useState(initialTab);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSearchParams(tab === 'request' ? { tab: 'request' } : {});
  };

  return (
    <div className="w-full min-h-screen bg-surface-off-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactHeader />

        <TabSwitcher
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 border border-outline-variant/30 shadow-sm">
            {activeTab === 'general' ? (
              <GeneralInquiryForm />
            ) : (
              <RequestServicesWizard
                onSwitchToGeneral={() => handleTabChange('general')}
              />
            )}
          </div>

          <ContactSidebar />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
