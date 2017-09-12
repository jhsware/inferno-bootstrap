import { getTarget } from './utils';

const PopperTargetHelper = (props, context) => {
  context.popperManager.setTargetNode(getTarget(props.target));
  return null;
};

export default PopperTargetHelper;