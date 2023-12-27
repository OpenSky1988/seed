
classDiagram
class TRootStackParamList {
            <<type>>
            +Diary: undefined
+DiaryDay: { day?: string | undefined; }
+Entry: { entry?: IDiaryEntry | undefined; }
+Today: { day?: string | undefined; }
+Settings: undefined
            
        }
class ILevelButtonSwitchProps {
            <<interface>>
            +selectedIndex: number
+setSelectedIndex: (index: number) =~ void
+levels: number[]
+label: string
            
        }
class IDateDisplayProps {
            <<interface>>
            +date?: string
            
        }
class TMealButton {
            <<type>>
            +diaryEntry: IDiaryEntry
+imageUri: string | undefined
            
        }
class IDiaryEntry {
            <<interface>>
            +id: string
+category: TMealCategories
+created_at: string
+fulfillment: number
+hunger: number
+imageUri?: string
+name: string
+notes: string
+time: string
            
        }
class IDiary {
            <<interface>>
            
            
        }
class DiaryDateState {
            <<type>>
            +entry: IDiaryEntry[]
            
        }
class SettingsState {
            <<interface>>
            +language: TLanguage
+themeMode: TThemeMode
            
        }