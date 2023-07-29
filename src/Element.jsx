import { useCallback } from 'react';
import style from './Element.module.css';

export const Element = ({ sign, group, color, isClick, singleClick, doubleClick, left, right  }) => {

  const styleSingleClick = `${style.element} ${isClick ? style.active : ""}`

  const handleClick = useCallback(() => {
    singleClick(group);
  }, [group])

  const handleDoubleClick = useCallback(() => {
    doubleClick(group);
  }, [group])

  return (
    <div className={styleSingleClick}
      style={{ background: color}}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
    >{`${left ? "[" : ""} ${sign} ${right ? "]" : ""}`}</div>
  )
}