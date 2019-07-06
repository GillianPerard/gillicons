import {Category} from "../classes/category";

export const categories: Map<string, Array<string>> = new Map([
    ['giAirbnb', [Category.Brand, Category.HotelAndHousing]],
    ['giAlignCenter', [Category.Writing]],
    ['giAlignJustify', [Category.Writing]],
    ['giAlignLeft', [Category.Writing]],
    ['giAlignRight', [Category.Writing]],
    ['giAndroid', [Category.Brand, Category.ComputerScience, Category.Technology]],
    ['giAngular', [Category.ComputerScience]],
    ['giApple', [Category.Brand, Category.ComputerScience, Category.Technology]],
    ['giArrowDown', [Category.Arrow]],
    ['giArrowLeft', [Category.Arrow]],
    ['giArrowRight', [Category.Arrow]],
    ['giArrowUp', [Category.Arrow]],
    ['giAtlassian', [Category.Brand, Category.ComputerScience]],
    ['giBackward', [Category.Arrow, Category.Multimedia, Category.Music]],
    ['giBan', [Category.Other]],
    ['giBarChart', [Category.Mathematics]],
    ['giBars', [Category.Other]],
    ['giBell', [Category.Object]],
    ['giBitbucket', [Category.Brand, Category.ComputerScience]],
    ['giBluetooth', [Category.Brand, Category.Technology]],
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
    ['giCheck', [Category.Other]],
    ['giChevronDown', [Category.Arrow]],
    ['giChevronLeft', [Category.Arrow]],
    ['giChevronRight', [Category.Arrow]],
    ['giChevronUp', [Category.Arrow]],
    ['giClock', [Category.DateAndTime, Category.Object]],
    ['giClockLine', [Category.DateAndTime, Category.Object]],
    ['giCloud', [Category.Weather]],
    ['giCode', [Category.ComputerScience]],
    ['giCog', [Category.Mechanics, Category.Object]],
    ['giCompress', [Category.Multimedia]],
    ['giConfluence', [Category.Brand, Category.ComputerScience]],
    ['giCranium', [Category.Emoticon]],
    ['giCraniumLine', [Category.Emoticon]],
    ['giDevil', [Category.Emoticon]],
    ['giDisc', [Category.Multimedia, Category.Music, Category.Object]],
    ['giDiscord', [Category.Brand, Category.Chat, Category.Social]],
    ['giDivide', [Category.Mathematics]],
    ['giDownload', [Category.ComputerScience]],
    ['giDribbble', [Category.Brand, Category.ImageAndVideo, Category.Social]],
    ['giDropbox', [Category.Brand, Category.ComputerScience]],
    ['giEdge', [Category.Brand, Category.ComputerScience]],
    ['giEnvelope', [Category.Object, Category.Social]],
    ['giEquals', [Category.Mathematics]],
    ['giExpand', [Category.Multimedia]],
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
    ['giGoogleDrive', [Category.Brand, Category.ComputerScience]],
    ['giGrid', [Category.Other]],
    ['giHeart', [Category.Health]],
    ['giImage', [Category.ImageAndVideo, Category.Multimedia, Category.Object]],
    ['giInstagram', [Category.Brand, Category.Chat, Category.ImageAndVideo, Category.Social]],
    ['giInternetExplorer', [Category.Brand, Category.ComputerScience]],
    ['giJiraAlign', [Category.Brand, Category.ComputerScience]],
    ['giJiraCore', [Category.Brand, Category.ComputerScience]],
    ['giJiraServiceDesk', [Category.Brand, Category.ComputerScience]],
    ['giJiraSoftware', [Category.Brand, Category.ComputerScience]],
    ['giKubernetes', [Category.Brand, Category.ComputerScience]],
    ['giLayers', [Category.Other]],
    ['giLinkedIn', [Category.Brand, Category.Business, Category.Social]],
    ['giList', [Category.Other]],
    ['giLock', [Category.Object]],
    ['giMedium', [Category.Brand, Category.ComputerScience, Category.Social]],
    ['giMessenger', [Category.Brand, Category.Chat, Category.Social]],
    ['giMicrophone', [Category.Multimedia, Category.Music, Category.Technology]],
    ['giMicrosoft', [Category.Brand, Category.ComputerScience]],
    ['giMinus', [Category.Mathematics]],
    ['giMoreHorizontal', [Category.Other]],
    ['giMoreVertical', [Category.Other]],
    ['giOpsgenie', [Category.Brand, Category.ComputerScience]],
    ['giPause', [Category.Multimedia, Category.Music]],
    ['giPen', [Category.Object, Category.Writing]],
    ['giPercentage', [Category.Mathematics]],
    ['giPinterest', [Category.Brand, Category.ImageAndVideo, Category.Social]],
    ['giPlay', [Category.Multimedia, Category.Music]],
    ['giPlus', [Category.Mathematics]],
    ['giPower', [Category.Other]],
    ['giRancher', [Category.Brand, Category.ComputerScience]],
    ['giReact', [Category.Brand, Category.ComputerScience]],
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
    ['giTimes', [Category.Mathematics]],
    ['giTimesCircle', [Category.Mathematics]],
    ['giTrash', [Category.Object]],
    ['giTrello', [Category.Brand, Category.ComputerScience]],
    ['giTux', [Category.Brand, Category.ComputerScience]],
    ['giTwitch', [Category.Brand, Category.ImageAndVideo, Category.Multimedia, Category.Social]],
    ['giTwitter', [Category.Brand, Category.Chat, Category.Social]],
    ['giUnlock', [Category.Object]],
    ['giUpload', [Category.ComputerScience]],
    ['giUser', [Category.Other]],
    ['giViber', [Category.Brand, Category.Chat, Category.Social]],
    ['giVivaldi', [Category.Brand, Category.ComputerScience]],
    ['giWhatsapp', [Category.Brand, Category.Chat, Category.Social]],
    ['giWifi', [Category.Technology]],
    ['giWindows', [Category.Brand, Category.ComputerScience]],
    ['giXbox', [Category.Brand, Category.Multimedia, Category.Technology, Category.VideoGame]],
    ['giYoutube', [Category.Brand, Category.ImageAndVideo, Category.Multimedia, Category.Social]]
]);

