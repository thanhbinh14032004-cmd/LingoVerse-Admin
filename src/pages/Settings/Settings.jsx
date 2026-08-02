import AdminLayout from "../../layouts/AdminLayout";

import SettingTabs from "../../components/Settings/SettingTabs";
import GeneralSetting from "../../components/Settings/GeneralSetting";
import SystemSetting from "../../components/Settings/SystemSetting";
import BackupCard from "../../components/Settings/BackupCard";

import { FaSave } from "react-icons/fa";


function Settings(){

  return (

    <AdminLayout>


      <div className="flex flex-col gap-8">


        {/* HEADER */}

        <div className="flex justify-between items-start">


          <div>

            <h1 className="
            text-5xl
            font-bold
            text-[#0058BE]
            ">
              Cấu hình hệ thống & Cài đặt
            </h1>


            <p className="
            mt-2
            text-gray-500
            ">
              Quản lý cấu hình chung, bảo mật, thông báo và phân quyền hệ thống.
            </p>


          </div>



          <button
          className="
          flex
          items-center
          gap-2
          bg-[#4A90E2]
          text-white
          px-6
          py-3
          rounded-lg
          font-semibold
          "
          >

            <FaSave/>

            Lưu thay đổi

          </button>


        </div>



        {/* TAB */}

        <SettingTabs />



        {/* CONTENT */}


        <GeneralSetting />


        <SystemSetting />


        <BackupCard />


      </div>


    </AdminLayout>

  );

}


export default Settings;