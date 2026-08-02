import AdminLayout from "../../layouts/AdminLayout";

import WordInfo from "../../components/AddWord/WordInfo";
import TopicBox from "../../components/AddWord/TopicBox";
import ExampleBox from "../../components/AddWord/ExampleBox";
import ImageUpload from "../../components/AddWord/ImageUpload";
import DisplaySetting from "../../components/AddWord/DisplaySetting";


function AddWord(){

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
              Thêm từ mới
            </h1>


            <p className="
              mt-2
              text-gray-500
            ">
              Bổ sung từ vựng và định nghĩa vào hệ thống từ điển LingoVerse.
            </p>

          </div>



          <div className="flex gap-3">


            <button
              className="
              px-6 py-3
              rounded-lg
              border
              border-gray-300
              bg-white
              "
            >
              Hủy
            </button>


            <button
              className="
              px-6 py-3
              rounded-lg
              bg-[#0058BE]
              text-white
              font-semibold
              "
            >
              Lưu từ mới
            </button>


          </div>


        </div>




        {/* CONTENT */}


        <div className="
          grid
          grid-cols-12
          gap-6
        ">



          {/* LEFT */}

          <div className="
            col-span-8
            flex
            flex-col
            gap-6
          ">


            <WordInfo />


            <TopicBox />


            <ExampleBox />


          </div>




          {/* RIGHT */}

          <div className="
            col-span-4
            flex
            flex-col
            gap-6
          ">


            <ImageUpload />


            <DisplaySetting />


          </div>


        </div>



      </div>


    </AdminLayout>

  );

}


export default AddWord;