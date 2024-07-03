import * as FilterActionCreators from "./filter";
import * as RouteActionCreators from "./route";
import * as SectionActionCreators from "./section";
import * as ZoomActionCreators from "./zoom";
import * as UserActionCreators from "./user";

export default {
    ...SectionActionCreators,
    ...ZoomActionCreators,
    ...FilterActionCreators,
    ...RouteActionCreators,
    ...UserActionCreators,
};
