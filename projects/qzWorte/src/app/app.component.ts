import { Component, OnInit } from '@angular/core';
import { AppDataService, Topic } from './services/app-data.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

export interface TopicExtended extends Topic {
  safeIconSvg: SafeHtml;
}

enum TopicColumns {
  level = 'level',
  name = 'name',
  default = 'default',
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'qzWorte';

  private topicList: Topic[] = [];
  public topicExtendedList: TopicExtended[] = [];
  public topicExtendedListOrigin: TopicExtended[] = [];

  public topicListOrder = {
    level: 1,
    name: 1,
    default: 1,
  };

  constructor(private dataService: AppDataService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.topicList = this.dataService.topicList.slice();
    let topicExt: TopicExtended = null;

    this.topicExtendedList = this.topicList.map((topic) => {
      topicExt = topic as unknown as TopicExtended;
      topicExt.safeIconSvg = this.getSanitizedHtml(topic.iconSvg);
      return topicExt;
    });
    this.topicExtendedListOrigin = this.topicExtendedList.slice();
  }

  getSanitizedHtml(html: string): SafeHtml {
    let result: SafeHtml = '';
    if (html) {
      result = this.sanitizer.bypassSecurityTrustHtml(html);
    }
    return result;
  }

  sortList(sortDimension: string): void {
    if (sortDimension && sortDimension in this.topicListOrder) {
      this.topicListOrder[sortDimension] = this.topicListOrder[sortDimension] * -1;

      if (sortDimension === TopicColumns.level) {
        this.topicExtendedList = this.topicExtendedList.sort((a: TopicExtended, b: TopicExtended) => {
          return this.topicListOrder[sortDimension] * (a.level - b.level);
        });
      } else if (sortDimension === TopicColumns.name) {
        this.topicExtendedList = this.topicExtendedList.sort((a: TopicExtended, b: TopicExtended) => {
          return this.topicListOrder[sortDimension] * (a.name <= b.name ? -1 : 1);
        });
      } else if (sortDimension === TopicColumns.default) {
        this.topicExtendedList = this.topicExtendedListOrigin.sort((a: TopicExtended, b: TopicExtended) => {
          return this.topicListOrder[sortDimension] * (a.name <= b.name ? -1 : 1);
        });
      }
    }
  }
}
