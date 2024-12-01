function calculateInstallment() {
    const price = parseFloat(document.getElementById("price").value);
    const downPaymentPercent = parseFloat(document.getElementById("downPayment").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value);
    const years = parseInt(document.getElementById("years").value);

    // ตรวจสอบว่าผู้ใช้กรอกข้อมูลครบถ้วน
    if (isNaN(price) || isNaN(downPaymentPercent) || isNaN(interestRate) || isNaN(years)) {
        document.getElementById("result").textContent = "กรุณากรอกข้อมูลให้ครบถ้วน!";
        return;
    }

    // คำนวณเงินดาวน์
    const downPayment = (downPaymentPercent / 100) * price;

    // คำนวณเงินต้นที่ต้องผ่อน
    const loanAmount = price - downPayment;

    // คำนวณดอกเบี้ยทั้งหมด
    const annualInterestRate = interestRate / 100;
    const totalInterest = loanAmount * annualInterestRate * years;

    // คำนวณยอดเงินทั้งหมดที่ต้องจ่าย
    const totalPayment = loanAmount + totalInterest;

    // คำนวณค่างวดรายเดือน
    const months = years * 12;
    const monthlyInstallment = totalPayment / months;

    // แสดงผล
    document.getElementById("result").textContent =
        `ค่างวดรายเดือน: ${monthlyInstallment.toFixed(2)} บาท`;
}
