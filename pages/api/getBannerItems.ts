export default function handler(req: any, res: any) {
  res.status(200).json([
    {
      id: 1,
      imageSrc: "https://msr-assets.s3.ap-northeast-2.amazonaws.com/letter.png",
      text: "프랩에서 투자상품을 조회한 횟수",
      dueData: "1,030,562회",
    },
    {
      id: 2,
      imageSrc: "https://msr-assets.s3.ap-northeast-2.amazonaws.com/calendar.png",
      text: "3알건 새로 등록된 상품",
      dueData: "121개",
    },
    {
      id: 3,
      imageSrc: "https://msr-assets.s3.ap-northeast-2.amazonaws.com/rocket.png",
      text: "3알건 마감된 투자상품",
      dueData: "22개",
    },
  ]);
}
