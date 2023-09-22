export interface HomePageData {
  id: string;
  corpName: string;
  corpEvent: string;
  corpPeriod: string;
  corpNote: string;
}

export interface CorpScheduleData {
  id: string;
  corpId: string;
  corpEvent: string;
  corpPeriod: string;
  corpNote: string;
}

export const sampleHomePageData: HomePageData[] = [
  {
    id: "1",
    corpName: "株式会社サンプル１",
    corpEvent: "面談",
    corpPeriod: "2023年9月8日",
    corpNote:
      "・○○さんとの定期面談 <br>・質問事項を考える<br> ・普段着で着ていく <br>",
  },
  {
    id: "2",
    corpName: "株式会社サンプル２",
    corpEvent: "説明会",
    corpPeriod: "2023年9月16日",
    corpNote:
      "・○○さんとの定期面談 <br>・質問事項を考える<br> ・普段着で着ていく <br>",
  },
  {
    id: "3",
    corpName: "株式会社サンプル３",
    corpEvent: "適性試験",
    corpPeriod: "2023年10月8日",
    corpNote:
      "・○○さんとの定期面談 <br>・質問事項を考える<br> ・普段着で着ていく <br>",
  },
  {
    id: "4",
    corpName: "株式会社サンプル４",
    corpEvent: "コーディングテスト",
    corpPeriod: "2023年10月18日",
    corpNote:
      "・○○さんとの定期面談 <br>・質問事項を考える<br> ・普段着で着ていく <br>",
  },
  {
    id: "5",
    corpName: "株式会社サンプル５",
    corpEvent: "面接",
    corpPeriod: "2023年11月8日",
    corpNote:
      "・○○さんとの定期面談 <br>・質問事項を考える<br> ・普段着で着ていく <br>",
  },
  {
    id: "6",
    corpName: "株式会社サンプル6",
    corpEvent: "面接",
    corpPeriod: "2023年11月20日",
    corpNote:
      "・○○さんとの定期面談 <br>・質問事項を考える<br> ・普段着で着ていく <br>",
  },
  {
    id: "7",
    corpName: "株式会社サンプル7",
    corpEvent: "面談",
    corpPeriod: "2023年12月3日",
    corpNote:
      "・○○さんとの定期面談 <br>・質問事項を考える<br> ・普段着で着ていく <br>",
  },
  {
    id: "8",
    corpName: "株式会社サンプル8",
    corpEvent: "説明会",
    corpPeriod: "2023年12月3日",
    corpNote:
      "・○○さんとの定期面談 <br>・質問事項を考える<br> ・普段着で着ていく <br>",
  },
  {
    id: "9",
    corpName: "株式会社サンプル9",
    corpEvent: "面談",
    corpPeriod: "2023年12月3日",
    corpNote:
      "・○○さんとの定期面談 <br>・質問事項を考える<br> ・普段着で着ていく <br>",
  },
];

export const sampleCorpSchedules: CorpScheduleData[] = [
  {
    id: "1",
    corpId: "1",
    corpEvent: "面談",
    corpPeriod: "2023年9月8日",
    corpNote:
      "・○○さんとの定期面談 <br>・質問事項を考える<br> ・普段着で着ていく <br>",
  },

  {
    id: "2",
    corpId: "1",
    corpEvent: "コーディングテスト",
    corpPeriod: "2023年9月20日",
    corpNote: "コーディングテスト締め切り",
  },
  {
    id: "3",
    corpId: "1",
    corpEvent: "ES",
    corpPeriod: "2023年10月1日",
    corpNote: "ES締め切り",
  },
  {
    id: "3",
    corpId: "1",
    corpEvent: "適性試験",
    corpPeriod: "2023年10月5日",
    corpNote: "適性試験締め切り",
  },
];
