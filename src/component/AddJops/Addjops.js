import React, { useState } from "react";
import "./Addjops.css";
import { Formik, useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import addpost from "../../images/landing/loginbackground.jpg";
import { upload } from "@testing-library/user-event/dist/upload";
function Addjops() {
    const [values, setValues] = useState({});
    const [file, setFile] = useState([]);
    let token = localStorage.getItem("token");
    let headers = {
        'Authorization': token
    }
    var i=0;
    const formik = useFormik({
        initialValues: {
            address: "",
            city: "",
            title: "",
            category: "",
            description: "",
            // cost: "",
            // days: "",
            jobImage: "",
        },
        validationSchema: yup.object().shape({
            address: yup.string().required("الرجاء اختيار العنوان"),
            city: yup.string().required("الرجاء املاء الحقل"),
            title: yup.string().required("الرجاء املاء الحقل"),
            category: yup.string().required("الرجاء اختيار نوع الحرفة"),
            description: yup
                .string()
                .min(15, "الرجاء كتابة اكثر من 15 كلمة")
                .required("الرجاء املاء الحقل"),
            // jobImage: yup.mixed().required("الرجاء اختيار صورة "),
        }),
        onSubmit: (values) => {
            
            console.log(values);
            const formData = new FormData()
            formData.append('jobImage', values.photo);
            formData.append('title', values.title);
            formData.append('address', values.address);
            formData.append('category', values.category);
            formData.append('city', values.city);
            formData.append('description', values.description);

              axios.post("http://localhost:7000/jobs/postjob",formData,{headers:headers}).then(
                (result)=>{
                    console.log(result)
                }
              ).catch((err)=>{
                console.log(err)
              });
        },
    });
    //   var imagearr = [];
    //   const uploadimage = (e) => {
    //     console.log("zzzzz");
    //     if (e.target.files && e.target.files.length > 0) {
    //       setFile(URL.createObjectURL( e.target.files[0]));
    //       console.log(e.target.files[0].name);

    //     }
    //   };
    return (
        <main className="form_Addjops">
            <div className="container">
                <form method="post" onSubmit={formik.handleSubmit} encType="multipart/form-data">
                    <h2 className="Title_Addjops">أضف مشكلتك</h2>




                    <div className="detail-addr" >
                        <label htmlFor="title">عنوان الوظيفة</label>
                        <input
                            type="text"
                            {...formik.getFieldProps("title")}
                            id="title"
                            name="title"
                            placeholder="اكتب شرح بسيط عن ما تقوم به الوظيفة"
                        />
                        {formik.touched.title && formik.errors.title ? (
                            <div style={{ color: "red" }}>{formik.errors.title}</div>
                        ) : null}
                    </div>

                    <div className="business">
                        <label htmlFor="business">اختر الحرفة</label>
                        <select
                            id="business"
                            name="category"
                            {...formik.getFieldProps("category")}
                        >
                            <option value="0">أختر الحرفة</option>
                            <option value="نجار">نجار</option>
                            <option value="سباك">سباك</option>
                            <option value="مبيض محارة">مبيض محارة</option>
                            <option value="كهربائي">كهربائي</option>
                            <option value="فني تكييف">فني تكييف</option>
                            <option value="دهانات">نقاش</option>
                            <option value="بناء">بناء</option>
                            <option value="الوميتال">الوميتال</option>
                            <option value="فني ارضيات">فني أرضيات</option>
                        </select>
                        {formik.touched.category && formik.errors.category ? (
                            <div style={{ color: "red" }}>{formik.errors.category}</div>
                        ) : null}
                    </div>

                    <div className="descript-jop">
                        <label htmlFor="descript">تفاصيل مشكلتك</label>
                        <textarea
                            name="description"
                            {...formik.getFieldProps("description")}
                            id="descript"
                            cols="30"
                            rows="5"
                            placeholder="اكتب تفاصيل مشكلتك ...."
                        ></textarea>
                        {formik.touched.description && formik.errors.description ? (
                            <div style={{ color: "red" }}>{formik.errors.description}</div>
                        ) : null}
                    </div>

                    {/* 
                    <div className="price">
                        <div className="cost-day">
                            <label htmlFor="cost">السعر</label>
                            <input
                                type="text"
                                name="cost"
                                id="cost"
                                {...formik.getFieldProps('cost')}
                                placeholder="السعر"
                            />
                            {formik.touched.cost && formik.errors.cost ? (
                                <div style={{ color: "red" }}>{formik.errors.cost}</div>
                            ) : null}
                        </div>


                        <div className="main-cost">
                            <label htmlFor="days">مدة التسليم</label>
                            <input
                                type="text"
                                name="days"
                                {...formik.getFieldProps('days')}
                                id="days"
                                placeholder="مدة التسليم"
                            />
                            {formik.touched.days && formik.errors.days ? (
                                <div style={{ color: "red" }}>{formik.errors.days}</div>
                            ) : null}
                        </div>
                    </div> */}

                    <div className="parent-addr">
                        <div className="main-addr">
                            <label htmlFor="city" name="اختر مدينتك">
                                اختر المدينة
                            </label>
                            <select id="city" name="city" {...formik.getFieldProps("city")}>
                                <optgroup label="مدينة أسوان">
                                    <option value="0" selected>أختر المركز</option>
                                    <option value="أسوان">أسوان</option>
                                    <option value="أسوان الجديدة">أسوان الجديدة</option>
                                    <option value="دراو">دراو</option>
                                    <option value="كوم امبو">كوم امبو</option>
                                    <option value="نصر النوبة">نصر النوبة</option>
                                    <option value="كلابشة">كلابشة</option>
                                    <option value="أدفو">أدفو</option>
                                </optgroup>
                            </select>
                            {formik.touched.city && formik.errors.city ? (
                                <div style={{ color: "red" }}>{formik.errors.city}</div>
                            ) : null}
                        </div>



                        <div className="detail-addr">
                            <label htmlFor="address">عنوانك</label>
                            <input
                                type="text"
                                {...formik.getFieldProps("address")}
                                id="address"
                                name="address"
                                placeholder="اكتب عنوانك بالتفصيل"
                            />
                            {formik.touched.address && formik.errors.address ? (
                                <div style={{ color: "red" }}>{formik.errors.address}</div>
                            ) : null}
                        </div>

                        <div className="add-pic btn btn-secondary">
                        <label htmlFor="upload-files" className="">
                            <i className="fa fa-download fs-5 " aria-hidden="true">
                                اضف صورة
                            </i>
                        </label>

                        <input
                            type="file"
                            {...formik.getFieldProps("jobImage")}
                            //   onChange={uploadimage}
                            style={{ display: "none" }}
                            name="jobImage"
                            // defaultValue="upload"
                            id="upload-files"
                            accept="image/*"
                            multiple
                             onChange={(e) =>
                            formik.setFieldValue('photo', e.currentTarget.files[0])
          }
                        />
                        <div>

                        </div>
                        {formik.touched.upload && formik.errors.upload ? (
                            <div style={{ color: "red" }}>{formik.errors.upload}</div>
                        ) : null}
                    </div>
                    </div>


                    

                    <button type="submit" id="submit" >اضف حرفتك</button>
                </form>
            </div>
        </main>
    );
}

export default Addjops;
