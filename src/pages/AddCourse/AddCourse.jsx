import AdminLayout from "../../layouts/AdminLayout";

import BasicInfo from "../../components/AddCourse/BasicInfo";
import LessonEditor from "../../components/AddCourse/LessonEditor";
import ImageUpload from "../../components/AddCourse/ImageUpload";
import VocabularyBox from "../../components/AddCourse/VocabularyBox";


function AddCourse(){

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
              Thêm bài học mới
            </h1>


            <p className="
              mt-2
              text-gray-500
            ">
              Tạo nội dung học tập hấp dẫn cho học viên.
            </p>

          </div>



          <div className="flex gap-3">


            <button
              className="
              px-6
              py-3
              rounded-lg
              border
              border-blue-500
              text-blue-600
              font-semibold
              "
            >
              Lưu bản nháp
            </button>



            <button
              className="
              px-6
              py-3
              rounded-lg
              bg-[#0058BE]
              text-white
              font-semibold
              "
            >
              Xuất bản
            </button>


          </div>


        </div>



        {/* CONTENT */}


        <div className="
          grid
          grid-cols-12
          gap-6
        ">


          <div className="
            col-span-8
            flex
            flex-col
            gap-6
          ">

            <BasicInfo />

            <LessonEditor />

          </div>



          <div className="
            col-span-4
            flex
            flex-col
            gap-6
          ">


            <ImageUpload />

            <VocabularyBox />


          </div>


        </div>


      </div>


    </AdminLayout>

  );

}


export default AddCourse;