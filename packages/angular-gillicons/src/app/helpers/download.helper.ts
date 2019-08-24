export class DownloadHelper {

    public static saveAs(content: string | Blob, filename: string) {
        const a = document.createElement('a');
        document.body.appendChild(a);
        a.style.display = 'none';

        let blob = content;

        if (!(blob instanceof Blob)) {
            const json = JSON.stringify(content);
            blob = new Blob([json], {type: 'octet/stream'});
        }

        const url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = filename;
        a.click();
        window.URL.revokeObjectURL(url);
    }
}
