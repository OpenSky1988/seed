#.interface: fill=lightblue
#.enumeration: fill=lightgreen
#.type: fill=lightgray
[<type>TRootStackParamList|+Diary: undefined;+DiaryDay: { day?: string \| undefined; };+Entry: { entry?: IDiaryEntry \| undefined; };+Today: { day?: string \| undefined; };+Settings: undefined|]
[<interface>ILevelButtonSwitchProps|+selectedIndex: number;+setSelectedIndex: (index: number) => void;+levels: number\[\];+label: string|]
[<interface>IDateDisplayProps|+date?: string|]
[<type>TMealButton|+diaryEntry: IDiaryEntry;+imageUri: string \| undefined|]
[<interface>IDiaryEntry|+id: string;+category: TMealCategories;+created_at: string;+fulfillment: number;+hunger: number;+imageUri?: string;+name: string;+notes: string;+time: string|]
[<interface>IDiary||]
[<type>DiaryDateState|+entry: IDiaryEntry\[\]|]
[<interface>SettingsState|+language: TLanguage;+themeMode: TThemeMode|]