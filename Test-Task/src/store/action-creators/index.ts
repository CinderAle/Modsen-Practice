import * as FilterActionCreators from "./filter";
import * as RouteActionCreators from "./route";
import * as SectionActionCreators from "./section";
import * as UserActionCreators from "./user";
import * as ZoomActionCreators from "./zoom";

export default {
    ...SectionActionCreators,
    ...ZoomActionCreators,
    ...FilterActionCreators,
    ...RouteActionCreators,
    ...UserActionCreators,
};
