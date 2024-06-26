import * as SectionActionCreators from "./section";
import * as ZoomActionCreators from "./zoom";
import * as FilterActionCreators from "./filter";

export default {
    ...SectionActionCreators,
    ...ZoomActionCreators,
    ...FilterActionCreators,
};
