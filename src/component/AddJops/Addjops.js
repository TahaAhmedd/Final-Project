import React, { useState } from "react";
import "./Addjops.css";
import { Formik, useFormik } from "formik";
import * as yup from "yup";
function Addjops() {
    const [values, setValues] = useState({});

    const formik = useFormik({
        initialValues: {
            address: "",
            city: "",
            title: "",
            category: "",
            description: "",
            cost: "",
            days: "",
            upload: "",
        },
        validationSchema: yup.object().shape({
            address: yup.string().required("الرجاء اختيار العنوان"),
            city: yup.string().required("الرجاء املاء الحقل"),
            business: yup.string().required("الرجاء اختيار نوع الحرفة"),
            description: yup
                .string()
                .min(15, "Must be 15 characters or more")
                .required("الرجاء املاء الحقل"),
            cost: yup.number("الرجاء ادخال رقم").required("الرجاء وضع التكلفة "),
            days: yup.string().required("الرجاء وضع مدة التسليم"),
            upload: yup.mixed().required("الرجاء اختيار صورة "),
        }),
    });

    // console.log(formik.values);
    // console.log(formik.handleSubmit);
    return (
        <main>
            <div className="container">
                <h1>أضف حرفتك</h1>
                <form onSubmit={formik.handleSubmit} enctype="multipart/form-data">
                    <div className="parent-addr">
                        <div className="main-addr">
                            <label htmlFor="city" name="اختر مدينتك">
                                اختر المدينة
                            </label>
                            <select
                                id="city"
                                name="city"
                                {...formik.getFieldProps('city')}
                            >
                                <option>اختر مدينتك</option>
                                <option value="أسوان">أسوان</option>
                                <option value="أسوان الجديدة">أسوان الجديدة</option>
                                <option value="دراو">دراو</option>
                                <option value="كوم امبو">كوم امبو</option>
                                <option value="نصر النوبة">نصر النوبة</option>
                                <option value="كلابشة">كلابشة</option>
                                <option value="أدفو">أدفو</option>
                            </select>
                            {formik.touched.city && formik.errors.city ? (
                                <div style={{ color: "red" }}>{formik.errors.city}</div>
                            ) : null}
                        </div>


                        <div className="detail-addr">
                            <label htmlFor="title">عنوان الوظيفة</label>
                            <input
                                type="text"

                                {...formik.getFieldProps('title')}
                                id="title"
                                name="title"
                                placeholder="اكتب عنوانك بالتفصيل"
                            />
                            {formik.touched.title && formik.errors.title ? (
                                <div style={{ color: "red" }}>{formik.errors.title}</div>
                            ) : null}
                        </div>


                        <div className="detail-addr">
                            <label htmlFor="address">عنوانك</label>
                            <input
                                type="text"

                                {...formik.getFieldProps('address')}
                                id="address"
                                name="address"
                                placeholder="اكتب عنوانك بالتفصيل"
                            />
                            {formik.touched.address && formik.errors.address ? (
                                <div style={{ color: "red" }}>{formik.errors.address}</div>
                            ) : null}
                        </div>
                    </div>


                    <div className="business">
                        <label htmlFor="business">اختر الحرفة</label>
                        <select
                            id="business"
                            name="category"
                            {...formik.getFieldProps('business')}
                        >
                            <option>اختر الحرفة</option>
                            <option value="سباكة">سباكة</option>
                            <option value="دهانات">دهانات</option>
                            <option value="نجارة">نجارة</option>
                            <option value="كهرباء">كهرباء</option>
                            <option value="بلاط ورخام">بلاط ورخام</option>
                            <option value="جبس ومحارة وكرانيش">جبس ومحارة وكرانيش</option>
                            <option value="زجاج">زجاج</option>
                            <option value="تبريد وتكييف">تبريد وتكييف</option>
                        </select>
                        {formik.touched.category && formik.errors.category ? (
                            <div style={{ color: "red" }}>{formik.errors.category}</div>
                        ) : null}
                    </div>


                    <div className="descript-jop">
                        <label htmlFor="descript">تفاصيل حرفتك</label>
                        <textarea
                            name="description"
                            {...formik.getFieldProps('description')}
                            id="descript"
                            cols="30"
                            rows="10"
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


                    <div className="add-pic">
                        <label htmlFor="upload-files">اضف صورة او فيديو</label>

                        <input
                            type="file"
                            {...formik.getFieldProps('upload')}
                            // style={{ display: "none" }}
                            name="jobImage"
                            defaultValue="upload"
                            id="upload-files"
                            accept="image/png, image/jpg, image/gif, image/jpeg"
                            multiple
                        />
                        {formik.touched.upload && formik.errors.upload ? (
                            <div style={{ color: "red" }}>{formik.errors.upload}</div>
                        ) : null}
                    </div>

                    <input type="submit" id="submit" value="اضف حرفتك" />
                </form>
            </div>
        </main>
    );
}

export default Addjops;
