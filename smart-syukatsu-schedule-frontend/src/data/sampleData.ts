
export interface HomePageData {
    corpName: string;
    corpEvent: string;
    corpPeriod: string;
    corpNote:string;
}

export const sampleHomePageData:HomePageData[] = [
    {
        corpName:'株式会社サンプル１',
        corpEvent: '面談',
        corpPeriod:"2023年9月8日",
        corpNote:"・○○さんとの定期面談 <br>・質問事項を考える<br> ・普段着で着ていく <br>"
    },
    {
        corpName:'株式会社サンプル２',
        corpEvent: '説明会',
        corpPeriod:"2023年9月16日",
        corpNote:"・○○さんとの定期面談 <br>・質問事項を考える<br> ・普段着で着ていく <br>"
    },
    {
        corpName:'株式会社サンプル３',
        corpEvent: '適性試験',
        corpPeriod:"2023年10月8日",
        corpNote:"・○○さんとの定期面談 <br>・質問事項を考える<br> ・普段着で着ていく <br>"
    },
    {
        corpName:'株式会社サンプル４',
        corpEvent: 'コーディングテスト',
        corpPeriod:"2023年10月18日",
        corpNote:"・○○さんとの定期面談 <br>・質問事項を考える<br> ・普段着で着ていく <br>"
    },
    {
        corpName:'株式会社サンプル５',
        corpEvent: '面接',
        corpPeriod:"2023年11月8日",
        corpNote:"・○○さんとの定期面談 <br>・質問事項を考える<br> ・普段着で着ていく <br>"
    },
    {
        corpName:'株式会社サンプル6',
        corpEvent: '面接',
        corpPeriod:"2023年11月20日",
        corpNote:"・○○さんとの定期面談 <br>・質問事項を考える<br> ・普段着で着ていく <br>"
    },
    {
        corpName:'株式会社サンプル7',
        corpEvent: '面談',
        corpPeriod:"2023年12月3日",
        corpNote:"・○○さんとの定期面談 <br>・質問事項を考える<br> ・普段着で着ていく <br>"
    },
    {
        corpName:'株式会社サンプル8',
        corpEvent: '説明会',
        corpPeriod:"2023年12月3日",
        corpNote:"・○○さんとの定期面談 <br>・質問事項を考える<br> ・普段着で着ていく <br>"
    },
    {
        corpName:'株式会社サンプル9',
        corpEvent: '面談',
        corpPeriod:"2023年12月3日",
        corpNote:"・○○さんとの定期面談 <br>・質問事項を考える<br> ・普段着で着ていく <br>"
    }
]


export const getSampleHomePageData = () => sampleHomePageData;
