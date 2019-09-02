import { Platform } from '@angular/cdk/platform';
import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, PLATFORM_ID } from '@angular/core';
import { Meta } from '@angular/platform-browser';

import * as gillicons from 'gillicons';
import { Category } from 'gillicons/category';
import { IconDefinition } from 'gillicons/icon-definition';

import { environment } from '../environments/environment';
import { Data } from './interfaces/data';
import { CompressService } from './services/download/compress.service';
import { DownloadHelper } from './helpers/download.helper';
import { View } from './enums/view.enum';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [CompressService],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

    private readonly icons: Array<IconDefinition> = Object.values(gillicons);
    public readonly viewKey: string = 'view';

    private _iconsFilter = '';
    public get iconsFilter() {
        return this._iconsFilter;
    }
    public set iconsFilter(value: string) {
        if (this._iconsFilter === value) {
            return;
        }
        this._iconsFilter = value;
        this.search(value);
    }

    public readonly categories = Object.keys(Category).map((key: string) => Category[key]);
    public readonly giAngular = gillicons.giAngular;
    public readonly giChevronLeft = gillicons.giChevronLeft;
    public readonly giGithub = gillicons.giGithub;
    public readonly giGrid = gillicons.giGrid;
    public readonly giList = gillicons.giList;
    public readonly giReact = gillicons.giReact;
    public readonly giTimes = gillicons.giTimes;
    public readonly View = View;

    public version = environment.version || 'Unknown';
    public displayedIcons = this.icons;
    public iconCategoriesFilter: Array<Category> = [];
    public numberOfIcons = this.icons.length;
    public selectedIcons: Array<IconDefinition> = [];
    public view: View;

    public constructor(
        private readonly compressService: CompressService,
        private readonly meta: Meta,
        private readonly platform: Platform,
        @Inject(PLATFORM_ID) private platformId: object
    ) {
        this.meta.addTag({ name: 'description', content: `A set of ${this.icons.length} free SVG icons developed under the MIT License.` });
        const view = this.getFromLocalStorage(this.viewKey) as View;
        this.view = view || View.List;
        if (!view) {
            this.setToLocalStorage(this.viewKey, this.view);
        }
    }

    private static getDataFromIcons(icons: Array<IconDefinition>): Array<Data> {
        return icons.map(icon => {
            return {
                name: icon.name,
                content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${icon.viewBox}"><path fill="#000000" fill-rule="evenodd" d="${icon.svgPath}"/></svg>`
            };
        });
    }

    private search(filter: string): void {
        this.displayedIcons = this.icons.filter((icon: IconDefinition) => {
            const exist = icon.name.toLowerCase().includes(filter.toLowerCase());
            let belongsToCategories: boolean;
            if (this.iconCategoriesFilter.length === 0) {
                belongsToCategories = true;
            } else {
                belongsToCategories = icon.categories.some((category: Category) => this.iconCategoriesFilter.includes(category));
            }
            return belongsToCategories && exist;
        });
    }

    public canDownload(): boolean {
        return !this.platform.ANDROID && !this.platform.IOS;
    }

    public get canDownloadSelectedIcons(): boolean {
        return this.selectedIcons.length > 0;
    }

    public toggleCategory(category: Category): void {
        const index = this.iconCategoriesFilter.indexOf(category);
        if (index > -1) {
            this.iconCategoriesFilter.splice(index, 1);
        } else {
            this.iconCategoriesFilter.push(category);
        }
        this.search(this._iconsFilter);
    }

    public downloadSelectedIcons(): void {
        if (this.canDownloadSelectedIcons) {
            this.download({ filename: 'gillicons', filesExtension: 'svg', data: AppComponent.getDataFromIcons(this.selectedIcons) });
        }
    }

    public downloadAll(): void {
        this.download({ filename: 'gillicons', filesExtension: 'svg', data: AppComponent.getDataFromIcons(this.icons) });
    }

    private download(conf: { filename: string, filesExtension: string, data: Array<Data> }) {
        this.compressService.compress(conf).subscribe((zip: Blob) => {
            DownloadHelper.saveAs(zip, `${conf.filename}.zip`);
        });
    }

    public isSelected(icon: IconDefinition): boolean {
        return this.selectedIcons.includes(icon);
    }

    public isCategorySelected(category: Category): boolean {
        return this.iconCategoriesFilter.includes(category);
    }

    public resetSelectedIcons(event: any): void {
        event.stopPropagation();
        this.selectedIcons = [];
    }

    public selectIcon(icon: IconDefinition): void {
        if (!this.canDownload()) {
            return;
        }

        if (this.isSelected(icon)) {
            this.selectedIcons = this.selectedIcons.filter(i => i !== icon);
        } else {
            this.selectedIcons.push(icon);
        }
    }

    public toggleDisplayFormat(): void {
        this.view = this.view === View.List ? View.Grid : View.List;
        this.setToLocalStorage(this.viewKey, this.view);
    }

    public setToLocalStorage(key: string, value: string) {
        if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem(key, value);
        }
    }

    public getFromLocalStorage(key: string) {
        if (isPlatformBrowser(this.platformId)) {
            return localStorage.getItem(key);
        }
    }
}
