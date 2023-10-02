
// @ts-ignore
const TotalAmount = (amountProccessed ) => {
    const totalAmt = amountProccessed.totalAmount.toLocaleString('en-US')
    

  return amountProccessed?(
    <h3 className='text-purple-600 mt-4 text-4xl text-center'>Total Scraped: <span className="text-purple-600 font-bold font-serif">{totalAmt}</span></h3>
  ):null;
};

export default TotalAmount;
