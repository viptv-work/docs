export interface NavLink {
  /** 站点图标 */
  icon?: string | { svg: string };
  badge?:
    | string
    | {
        text?: string;
        type?: "info" | "tip" | "warning" | "danger";
      };
  /** 站点名称 */
  title: string;
  /** 站点名称 */
  desc?: string;
  /** 站点链接 */
  link: string;
}

export interface NavData {
  Category_id: string;
  title: string;
  category_icon: string;
  category_item: string;
  items: NavLink[];
}
