import * as SectionActionCreators from "./section";
import * as ZoomActionCreators from "./zoom";
import * as FilterActionCreators from "./filter";
import * as RouteActionCreators from "./route";

export default {
    ...SectionActionCreators,
    ...ZoomActionCreators,
    ...FilterActionCreators,
    ...RouteActionCreators,
};
