export const resultSum = (numbers: any, numbersInfo: any) => {
  const mattressesCount = numbers.reduce((sum: number, current: any) => {
    return (sum += current.mattress);
  }, 0);
  const nutritionCount = numbers.reduce((sum: number, current: any) => {
    return (sum += current.nutrition);
  }, 0);
  const matressesSum = mattressesCount * numbersInfo.mattress;
  const nutritionSum = nutritionCount * numbersInfo.nutrition;

  const standartCount = numbers.filter(
    (number: any) => number.type === "standart",
  ).length;
  const deluxeCount = numbers.filter(
    (number: any) => number.type === "deluxe",
  ).length;
  const luxeCount = numbers.filter(
    (number: any) => number.type === "luxe",
  ).length;
  const standartSum = standartCount * numbersInfo.data[0].price;
  const deluxeSum = deluxeCount * numbersInfo.data[1].price;
  const luxeSum = luxeCount * numbersInfo.data[2].price;

  return matressesSum + nutritionSum + standartSum + deluxeSum + luxeSum;
};
