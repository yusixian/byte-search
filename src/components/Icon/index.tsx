/*
 * @Author: cos
 * @Date: 2022-05-11 20:30:46
 * @LastEditTime: 2022-05-29 02:01:04
 * @LastEditors: cos
 * @Description: IconFont 项目图标 加入新图标记得要去色之后再更新代码，粘贴到scriptUrl中
 * @FilePath: \byte-search\src\components\IconFont.tsx\IconFont.tsx
 */
import { createFromIconfontCN } from '@ant-design/icons';

// https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=3394019
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_3391549_1xoz9v6qtpn.js',
});

export type IconProps = {
  type: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  show?: boolean; // 默认为显示 true
};
const Icon = ({ type, style, className, onClick, show = true }: IconProps) => {
  return <>{show && <IconFont type={`icon-${type}`} style={style} className={className} onClick={onClick} />}</>;
};

export default Icon;
// use Like
// <Icon type="icon-image" />
// <Icon type="icon-default" show=false/>
// <Icon type="icon-text" style={{fontSize: 40, color: 'gray'}} />
