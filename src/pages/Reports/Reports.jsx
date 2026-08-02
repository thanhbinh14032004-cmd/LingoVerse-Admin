import AdminLayout from "../../layouts/AdminLayout";

import ReportStats from "../../components/Report/ReportStats";
import ReportTable from "../../components/Report/ReportTable";


function Reports(){

return (

<AdminLayout>


<div className="flex flex-col gap-8">


{/* HEADER */}

<div>

<h1 className="
text-5xl
font-bold
text-[#0058BE]
">

Báo cáo

</h1>


<p className="
mt-2
text-gray-500
">

Quản lý và phản hồi các đóng góp từ cộng đồng học tập.

</p>


</div>



{/* STATS */}

<ReportStats />



{/* TABLE 1 */}

<ReportTable
title="Báo cáo từ vựng"
/>



{/* TABLE 2 */}

<ReportTable
title="Báo cáo bài viết"
/>



</div>


</AdminLayout>

)

}


export default Reports;