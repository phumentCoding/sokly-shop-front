import React from 'react';

const SidebarDetail = () => {
  return (
    <>
      {/* Sidebar Document Requirement Box */}
      <div className="lg:col-span-1 w-full lg:ml-[230px] lg:mr-0">
        <div className="border border-blue-300 rounded-md p-3 w-full lg:max-w-[350px]">
          <div className="space-y-3 space-x-3 text-base">
            <h3 className="font-semibold text-blue-900 text-center">
              ឯកសារសម្រាប់បង់រំលស់
            </h3>

            <div className="space-y-1 font-bold">
              <p className="font-medium">១-សៀវភៅគ្រួសារ​​​</p>
              <p className="font-medium">២-អត្តសញ្ញាណប័ណ្ណ</p>
              <p className="font-medium">៣-សំបុត្រកំណើត</p>
              <p className="font-medium">៤-លិខិតបញ្ជាក់ប្រាក់ចំនូល​​​​​​</p>
            </div>

            <div className="leading-snug">
              <p>
                សូមអញ្ជើញយកមកនូវឯកសារខាងលើ​មកហាងយើងខ្ញុំ ដើម្បីធ្វើការស្នើសុំបង់រំលស់ជាមួយធនាគារ។ អរគុណ​​​​​
              </p>
            </div>

            <div className="pt-1">
              <p className="font-medium text-gray-800">
                *Cambodian only (Bank Policy)!
              </p>
            </div>
          </div>
        </div>

        <div className='mt-4 lg:max-w-[350px]'>
            <img src="https://www.soklyphone.com/storage/Advertises/2025/04-04-2025/face-page-1744167472AoQ7V.jpg" alt="" />
        </div>
        <div className='mt-4 lg:max-w-[350px]'>
            <img src="https://www.soklyphone.com/storage/Advertises/2025/07-07-2025/iphone-16-pro-max-8-7-25-1751940478L7ssv.jpg" alt="" />
        </div>
        <div className='mt-4 lg:max-w-[350px]'>
            <img src="https://www.soklyphone.com/storage/Advertises/2025/07-07-2025/iphone-16-16-plus-1751338334EjeAz.png" alt="" />
        </div>
        <div className='mt-4 lg:max-w-[350px]'>
            <img src="https://www.soklyphone.com/storage/Advertises/2025/07-07-2025/iphone-16e-04-07-25-175162244257SHS.jpg" alt="" />
        </div>
        <div className='mt-4 lg:max-w-[350px]'>
            <img src="https://www.soklyphone.com/storage/Advertises/2025/07-07-2025/iphone-15-15-plus-04-07-25-1751622501V4yA4.jpg" alt="" />
        </div>
      </div>
    </>
  );
};

export default SidebarDetail;
