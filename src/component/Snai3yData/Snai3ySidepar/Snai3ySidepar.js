import "./Snai3ySidepar.css";

function Snai3ySidepar() {
  return (
    <div className="twoSlid">
      <div className="categories">
        <ul className="c_one">
          <h4>الاقسام</h4>
          <li>
            <i className="fa-brands fa-pied-piper"></i>
            سباكة
            <span>10</span>
          </li>
          <li>
            <i className="fa-solid fa-rug"></i>
            نجارة
            <span>15</span>
          </li>
          <li>
            <i className="fa-solid fa-paint-roller"></i>
            دهانات
            <span>8</span>
          </li>
          <li>
            <i className="fa-solid fa-bolt"></i>
            كهرباء
            <span>5</span>
          </li>
          <li>
            <i className="fa-solid fa-building"></i>
            بناء
            <span>4</span>
          </li>
          <li>
            <i className="fa-solid fa-house-flood-water"></i>
            ارضيات
            <span>11</span>
          </li>
          <li>
            <i className="fa-solid fa-chalkboard"></i>
            تبيض
            <span>8</span>
          </li>
          <li>
            <i className="fa-solid fa-fan"></i>
            تكيف
            <span>10</span>
          </li>
          <li>
            <i className="fa-brands fa-pied-piper"></i>
            سباكة
            <span>6</span>
          </li>
          <li>
            <i className="fa-brands fa-pied-piper"></i>
            سباكة
            <span>12</span>
          </li>
        </ul>



        {/* <ul className="c_two">
          <h4>مستوي العميل </h4>
          <li>
            <input
              type="checkbox"
              id="trusted_client"
              name="trusted_client"
              value="trusted_client"
            />
            <label htmlFor="trusted_client">عميل موثوق</label>
            <br />
          </li>
          <li>
            <input
              type="checkbox"
              id="active_client"
              name="active_client"
              value="active_client"
            />
            <label htmlFor="active_client">عميل نشط</label>
            <br />
          </li>
          <li>
            <input
              type="checkbox"
              id="new_customer"
              name="new_customer"
              value="new_customer"
            />
            <label htmlFor="new_customer">عميل جديد</label>
            <br />
          </li>
        </ul> */}


        {/* <ul className="c_three">
          <h4>حاله البائع </h4>
          <li>
            <input
              type="checkbox"
              id="online_now"
              name="online_now"
              value="online_now"
            />
            <label htmlFor="online_now">متواجد حاليآ</label>
            <br />
          </li>
          <li>
            <input
              type="checkbox"
              id="trusted_identity"
              name="trusted_identity"
              value="trusted_identity"
            />
            <label htmlFor="trusted_identity">هوية موثوقة</label>
            <br />
          </li>
        </ul> */}

        <ul className="c_three">
          <h4>تحديد مكان العمل</h4>
          <li>
            <input
              type="radio"
              id="trusted_identity"
              name="trusted_identity"
              value="trusted_identity"
            />
            <label htmlFor="trusted_identity">أسوان الجديدة</label>
            <i className="fa-solid fa-location-dot"></i>
          </li>
          <li>
            <input
              type="radio"
              id="trusted_identity"
              name="trusted_identity"
              value="trusted_identity"
            />
            <label htmlFor="trusted_identity">أبو سمبل</label>
            <i className="fa-solid fa-location-dot"></i>
          </li>
          <li>
            <input
              type="radio"
              id="trusted_identity"
              name="trusted_identity"
              value="trusted_identity"
            />
            <label htmlFor="trusted_identity">دراو</label>
            <i className="fa-solid fa-location-dot"></i>
          </li>
          <li>
            <input
              type="radio"
              id="trusted_identity"
              name="trusted_identity"
              value="trusted_identity"
            />
            <label htmlFor="trusted_identity">كوم أمبو</label>
            <i className="fa-solid fa-location-dot"></i>
          </li>
          <li>
            <input
              type="radio"
              id="trusted_identity"
              name="trusted_identity"
              value="trusted_identity"
            />
            <label htmlFor="trusted_identity">نصر النوبة</label>
            <i className="fa-solid fa-location-dot"></i>
          </li>
          <li>
            <input
              type="radio"
              id="trusted_identity"
              name="trusted_identity"
              value="trusted_identity"
            />
            <label htmlFor="trusted_identity">كلابشة</label>
            <i className="fa-solid fa-location-dot"></i>
          </li>
          <li>
            <input
              type="radio"
              id="trusted_identity"
              name="trusted_identity"
              value="trusted_identity"
            />
            <label htmlFor="trusted_identity">إدفو</label>
            <i className="fa-solid fa-location-dot"></i>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Snai3ySidepar;
