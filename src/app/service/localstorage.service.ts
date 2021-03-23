import { Injectable } from '@angular/core';
import { defer, EMPTY, iif, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { AppComponent } from 'src/app/app.component';


class LocalStorage implements Storage {
	[x: string]: any;
	readonly length = 0;
	clear(): void {}
	getItem(key: string): string | null { return null; }
	key(index: number): string | null { return null;  }
	removeItem(key: string): void {}
	setItem(key: string, value: string): void {}
}

@Injectable({providedIn: 'root'})
export class LocalStorageService implements Storage {
	private storage: Storage;

	constructor() {
		this.storage = new LocalStorage();

		if (AppComponent.isBrowser.getValue() === true) {
			this.storage = localStorage;
		}
	}

	[x: string]: any;
	length = 0;

	clear(): void {
		this.storage.clear();
	}

	getItem(key: string): string | null {
		return this.storage.getItem(key);
	}

	key(index: number): string | null {
		return this.storage.key(index);
	}

	removeItem(key: string): void {
		return this.storage.removeItem(key);
	}

	setItem(key: string, value: string): void {
		return this.storage.setItem(key, value);
	}
}