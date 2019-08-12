import { Category } from "../classes/category";

export const categories: Map<string, Array<string>> = new Map([
    ['giAirbnb', [Category.Brand, Category.HotelAndHousing]],
    ['giAlignCenter', [Category.Writing]],
    ['giAlignJustify', [Category.Writing]],
    ['giAlignLeft', [Category.Writing]],
    ['giAlignRight', [Category.Writing]],
    ['giAndroid', [Category.Brand, Category.ComputerScience, Category.Technology]],
    ['giAngular', [Category.ComputerScience]],
    ['giApple', [Category.Brand, Category.ComputerScience, Category.Technology]],
    ['giArrowsHorizontal', [Category.Arrow]],
    ['giArrowsVertical', [Category.Arrow]],
    ['giArrowDown', [Category.Arrow]],
    ['giArrowLeft', [Category.Arrow]],
    ['giArrowRight', [Category.Arrow]],
    ['giArrowUp', [Category.Arrow]],
    ['giAtlassian', [Category.Brand, Category.ComputerScience]],
    ['giAt', [Category.ComputerScience, Category.Social]],
    ['giBackward', [Category.Arrow, Category.Multimedia, Category.Music]],
    ['giBan', [Category.Other]],
    ['giBarChart', [Category.Mathematics]],
    ['giBars', [Category.Other]],
    ['giBell', [Category.Object]],
    ['giBitbucket', [Category.Brand, Category.ComputerScience]],
    ['giBluetooth', [Category.Brand, Category.Technology]],
    ['giBold', [Category.Writing]],
    ['giBolt', [Category.Weather]],
    ['giCalendarCheckLine', [Category.DateAndTime, Category.Object]],
    ['giCalendarCheck', [Category.DateAndTime, Category.Object]],
    ['giCalendarDayLine', [Category.DateAndTime, Category.Object]],
    ['giCalendarDay', [Category.DateAndTime, Category.Object]],
    ['giCalendarEmptyLine', [Category.DateAndTime, Category.Object]],
    ['giCalendarEmpty', [Category.DateAndTime, Category.Object]],
    ['giCalendarLine', [Category.DateAndTime, Category.Object]],
    ['giCalendarMinusLine', [Category.DateAndTime, Category.Object]],
    ['giCalendarMinus', [Category.DateAndTime, Category.Object]],
    ['giCalendarPlusLine', [Category.DateAndTime, Category.Object]],
    ['giCalendarPlus', [Category.DateAndTime, Category.Object]],
    ['giCalendarRangeLine', [Category.DateAndTime, Category.Object]],
    ['giCalendarRange', [Category.DateAndTime, Category.Object]],
    ['giCalendarTimesLine', [Category.DateAndTime, Category.Object]],
    ['giCalendarTimes', [Category.DateAndTime, Category.Object]],
    ['giCalendar', [Category.DateAndTime, Category.Object]],
    ['giCamera', [Category.ImageAndVideo, Category.Multimedia, Category.Object, Category.Technology]],
    ['giCheckCircle', [Category.Other]],
    ['giCheck', [Category.Other]],
    ['giChevronDown', [Category.Arrow]],
    ['giChevronLeft', [Category.Arrow]],
    ['giChevronRight', [Category.Arrow]],
    ['giChevronUp', [Category.Arrow]],
    ['giClockCircleLine', [Category.DateAndTime, Category.Object]],
    ['giClockCircle', [Category.DateAndTime, Category.Object]],
    ['giCloud', [Category.Weather]],
    ['giCode', [Category.ComputerScience]],
    ['giCog', [Category.Mechanics, Category.Object]],
    ['giCompress', [Category.Multimedia]],
    ['giConfluence', [Category.Brand, Category.ComputerScience]],
    ['giCranium', [Category.Anatomy, Category.Emoticon]],
    ['giCraniumLine', [Category.Anatomy, Category.Emoticon]],
    ['giCursorDefault', [Category.Arrow, Category.ComputerScience]],
    ['giDesktopLine', [Category.ComputerScience, Category.Object, Category.Technology]],
    ['giDesktop', [Category.ComputerScience, Category.Object, Category.Technology]],
    ['giDevil', [Category.Emoticon]],
    ['giDisc', [Category.Multimedia, Category.Music, Category.Object]],
    ['giDiscord', [Category.Brand, Category.Chat, Category.Social]],
    ['giDivide', [Category.Mathematics]],
    ['giDownload', [Category.ComputerScience]],
    ['giDribbble', [Category.Brand, Category.ImageAndVideo, Category.Social]],
    ['giDropbox', [Category.Brand, Category.ComputerScience]],
    ['giEarth', [Category.Other]],
    ['giEdge', [Category.Brand, Category.ComputerScience]],
    ['giEnvelope', [Category.Object, Category.Social]],
    ['giEquals', [Category.Mathematics]],
    ['giExpand', [Category.Multimedia]],
    ['giEyeLine', [Category.Anatomy]],
    ['giEyeOffLine', [Category.Anatomy]],
    ['giEyeOff', [Category.Anatomy]],
    ['giEye', [Category.Anatomy]],
    ['giFacebook', [Category.Brand, Category.Chat, Category.Social]],
    ['giFastBackward', [Category.Arrow, Category.Multimedia, Category.Multimedia]],
    ['giFastForward', [Category.Arrow, Category.Multimedia, Category.Music]],
    ['giFilter', [Category.Object]],
    ['giFirefox', [Category.Brand, Category.ComputerScience]],
    ['giFolder', [Category.Object]],
    ['giFolderPlus', [Category.Object]],
    ['giForward', [Category.Arrow, Category.Multimedia, Category.Music]],
    ['giGillicons', [Category.Brand, Category.ComputerScience, Category.ImageAndVideo]],
    ['giGithub', [Category.Brand, Category.ComputerScience, Category.Social]],
    ['giGitlab', [Category.Brand, Category.ComputerScience]],
    ['giGlobe', [Category.Other]],
    ['giGoogleDrive', [Category.Brand, Category.ComputerScience]],
    ['giGrid', [Category.Other]],
    ['giHand', [Category.Anatomy]],
    ['giHeart', [Category.Anatomy, Category.Health]],
    ['giImage', [Category.ImageAndVideo, Category.Multimedia, Category.Object]],
    ['giInformationCircleLine', [Category.Other]],
    ['giInformationCircle', [Category.Other]],
    ['giInformation', [Category.Other]],
    ['giInstagram', [Category.Brand, Category.Chat, Category.ImageAndVideo, Category.Social]],
    ['giInternetExplorer', [Category.Brand, Category.ComputerScience]],
    ['giItalic', [Category.Writing]],
    ['giJiraAlign', [Category.Brand, Category.ComputerScience]],
    ['giJiraCore', [Category.Brand, Category.ComputerScience]],
    ['giJiraServiceDesk', [Category.Brand, Category.ComputerScience]],
    ['giJiraSoftware', [Category.Brand, Category.ComputerScience]],
    ['giKubernetes', [Category.Brand, Category.ComputerScience]],
    ['giLayers', [Category.Other]],
    ['giLinkedIn', [Category.Brand, Category.Business, Category.Social]],
    ['giLink', [Category.Writing]],
    ['giList', [Category.Other]],
    ['giLock', [Category.Object]],
    ['giMedium', [Category.Brand, Category.ComputerScience, Category.Social]],
    ['giMessenger', [Category.Brand, Category.Chat, Category.Social]],
    ['giMicrophone', [Category.Multimedia, Category.Music, Category.Technology]],
    ['giMicrosoft', [Category.Brand, Category.ComputerScience]],
    ['giMinus', [Category.Mathematics]],
    ['giMobileLine', [Category.Multimedia, Category.Technology]],
    ['giMobile', [Category.Multimedia, Category.Technology]],
    ['giMoreHorizontal', [Category.Other]],
    ['giMoreVertical', [Category.Other]],
    ['giOpsgenie', [Category.Brand, Category.ComputerScience]],
    ['giOrderedList', [Category.Writing]],
    ['giPause', [Category.Multimedia, Category.Music]],
    ['giPen', [Category.Object, Category.Writing]],
    ['giPercentage', [Category.Mathematics]],
    ['giPinterest', [Category.Brand, Category.ImageAndVideo, Category.Social]],
    ['giPlaystation', [Category.Brand, Category.Multimedia, Category.Technology, Category.VideoGame]],
    ['giPlay', [Category.Multimedia, Category.Music]],
    ['giPlus', [Category.Mathematics]],
    ['giPower', [Category.Other]],
    ['giQuestionCircleLine', [Category.Other]],
    ['giQuestionCircle', [Category.Other]],
    ['giQuestion', [Category.Other]],
    ['giRancher', [Category.Brand, Category.ComputerScience]],
    ['giReact', [Category.Brand, Category.ComputerScience]],
    ['giRedo', [Category.Arrow]],
    ['giRefresh', [Category.Arrow]],
    ['giSearchMinus', [Category.Object]],
    ['giSearchPlus', [Category.Object]],
    ['giSearch', [Category.Object]],
    ['giSettingsHorizontal', [Category.Other]],
    ['giSettingsVertical', [Category.Other]],
    ['giShareLink', [Category.Social]],
    ['giShoppingBasket', [Category.Shopping]],
    ['giSkype', [Category.Brand, Category.Chat, Category.Social]],
    ['giSnapchat', [Category.Brand, Category.Chat, Category.ImageAndVideo, Category.Social]],
    ['giSourcetree', [Category.Brand, Category.ComputerScience]],
    ['giStarHalfFillAndLine', [Category.Other]],
    ['giStarHalfLine', [Category.Other]],
    ['giStarHalf', [Category.Other]],
    ['giStarLine', [Category.Other]],
    ['giStar', [Category.Other]],
    ['giStatuspage', [Category.Brand, Category.ComputerScience]],
    ['giStepBackward', [Category.Arrow, Category.Multimedia, Category.Music]],
    ['giStepForward', [Category.Arrow, Category.Multimedia, Category.Music]],
    ['giStop', [Category.Multimedia, Category.Music]],
    ['giTabletLine', [Category.Multimedia, Category.Technology]],
    ['giTablet', [Category.Multimedia, Category.Technology]],
    ['giTimes', [Category.Mathematics]],
    ['giTimesCircle', [Category.Mathematics]],
    ['giTrash', [Category.Object]],
    ['giTrello', [Category.Brand, Category.ComputerScience]],
    ['giTux', [Category.Brand, Category.ComputerScience]],
    ['giTwitch', [Category.Brand, Category.ImageAndVideo, Category.Multimedia, Category.Social]],
    ['giTwitter', [Category.Brand, Category.Chat, Category.Social]],
    ['giUnderline', [Category.Writing]],
    ['giUndo', [Category.Arrow]],
    ['giUnlock', [Category.Object]],
    ['giUnorderedList', [Category.Writing]],
    ['giUpload', [Category.ComputerScience]],
    ['giUser', [Category.Other]],
    ['giViber', [Category.Brand, Category.Chat, Category.Social]],
    ['giVivaldi', [Category.Brand, Category.ComputerScience]],
    ['giVolumeHigh', [Category.Multimedia, Category.Music]],
    ['giVolumeLow', [Category.Multimedia, Category.Music]],
    ['giVolumeMedium', [Category.Multimedia, Category.Music]],
    ['giVolumeMute', [Category.Multimedia, Category.Music]],
    ['giVolumeOff', [Category.Multimedia, Category.Music]],
    ['giWhatsapp', [Category.Brand, Category.Chat, Category.Social]],
    ['giWifi', [Category.Technology]],
    ['giWindows', [Category.Brand, Category.ComputerScience]],
    ['giXbox', [Category.Brand, Category.Multimedia, Category.Technology, Category.VideoGame]],
    ['giYoutube', [Category.Brand, Category.ImageAndVideo, Category.Multimedia, Category.Social]]
]);

