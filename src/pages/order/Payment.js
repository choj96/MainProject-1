import React from "react";

const Payment = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <p className="block text-center mb-5 font-semibold text-2xl">
          결제내역
        </p>
        <div className="flex justify-center items-center bg-main text-white w-52 h-10">
          한솥도시락
        </div>
      </div>
      <div className="mt-10">
        <div className="flex flex-col justify-center items-center">
          <p className="mb-1">주문일시: 2022년 12월 17일 오전 10:44</p>
          <p className="mb-5">주문번호: B1232E3223</p>
          <div className="flex flex-col justify-center items-center mb-10 mt-10">
            <p className="mb-1">토마토 파스타 1개</p>
            <p className="mb-1">토핑: 청양고추,새우튀김</p>
            <p className="mb-1">6,600원</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-10">
          <div className="flex flex-row justify-between w-72 mb-3">
            <p>배달비</p>
            <p>0원</p>
          </div>
          <div className="flex flex-row  justify-between w-72 mb-3">
            <p>총 결제금액</p>
            <p>0원</p>
          </div>
          <div className="flex flex-row justify-between w-72 mb-3">
            <p>결제방법 :</p>
            <p>카카오페이</p>
          </div>
          <div className="flex flex-row justify-between w-72 mb-3">
            <p>수령장소 :</p>
            <p>00대학교 00건물</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;