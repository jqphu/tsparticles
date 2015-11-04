// LayoutTests/svg/dom/script-tests/path-segments.js
QUnit.test("Path segment types", function(assert) {
    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");

    assert.equal(SVGPathSeg.PATHSEG_UNKNOWN, "0");
    assert.equal(SVGPathSeg.PATHSEG_CLOSEPATH, "1");
    assert.equal(SVGPathSeg.PATHSEG_MOVETO_ABS, "2");
    assert.equal(SVGPathSeg.PATHSEG_MOVETO_REL, "3");
    assert.equal(SVGPathSeg.PATHSEG_LINETO_ABS, "4");
    assert.equal(SVGPathSeg.PATHSEG_LINETO_REL, "5");
    assert.equal(SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS, "6");
    assert.equal(SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL, "7");
    assert.equal(SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS, "8");
    assert.equal(SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL, "9");
    assert.equal(SVGPathSeg.PATHSEG_ARC_ABS, "10");
    assert.equal(SVGPathSeg.PATHSEG_ARC_REL, "11");
    assert.equal(SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS, "12");
    assert.equal(SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL, "13");
    assert.equal(SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS, "14");
    assert.equal(SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL, "15");
    assert.equal(SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS, "16");
    assert.equal(SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL, "17");
    assert.equal(SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS, "18");
    assert.equal(SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL, "19");

    assert.equal(path.createSVGPathSegClosePath().pathSegType, SVGPathSeg.PATHSEG_CLOSEPATH);
    assert.equal(path.createSVGPathSegClosePath().pathSegTypeAsLetter, "z");
    assert.equal(path.createSVGPathSegMovetoAbs(1, 2).pathSegType, SVGPathSeg.PATHSEG_MOVETO_ABS);
    assert.equal(path.createSVGPathSegMovetoAbs(1, 2).pathSegTypeAsLetter, "M");
    assert.equal(path.createSVGPathSegMovetoAbs(1, 2).x, "1");
    assert.equal(path.createSVGPathSegMovetoAbs(1, 2).y, "2");
    assert.equal(path.createSVGPathSegMovetoRel(1, 2).pathSegType, SVGPathSeg.PATHSEG_MOVETO_REL);
    assert.equal(path.createSVGPathSegMovetoRel(1, 2).pathSegTypeAsLetter, "m");
    assert.equal(path.createSVGPathSegMovetoRel(1, 2).x, "1");
    assert.equal(path.createSVGPathSegMovetoRel(1, 2).y, "2");
    assert.equal(path.createSVGPathSegLinetoAbs(1, 2).pathSegType, SVGPathSeg.PATHSEG_LINETO_ABS);
    assert.equal(path.createSVGPathSegLinetoAbs(1, 2).pathSegTypeAsLetter, "L");
    assert.equal(path.createSVGPathSegLinetoAbs(1, 2).x, "1");
    assert.equal(path.createSVGPathSegLinetoAbs(1, 2).y, "2");
    assert.equal(path.createSVGPathSegLinetoRel(1, 2).pathSegType, SVGPathSeg.PATHSEG_LINETO_REL);
    assert.equal(path.createSVGPathSegLinetoRel(1, 2).pathSegTypeAsLetter, "l");
    assert.equal(path.createSVGPathSegLinetoRel(1, 2).x, "1");
    assert.equal(path.createSVGPathSegLinetoRel(1, 2).y, "2");
    assert.equal(path.createSVGPathSegCurvetoCubicAbs(1, 2, 3, 4, 5, 6).pathSegType, SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS);
    assert.equal(path.createSVGPathSegCurvetoCubicAbs(1, 2, 3, 4, 5, 6).pathSegTypeAsLetter, "C");
    assert.equal(path.createSVGPathSegCurvetoCubicAbs(1, 2, 3, 4, 5, 6).x, "1");
    assert.equal(path.createSVGPathSegCurvetoCubicAbs(1, 2, 3, 4, 5, 6).y, "2");
    assert.equal(path.createSVGPathSegCurvetoCubicAbs(1, 2, 3, 4, 5, 6).x1, "3");
    assert.equal(path.createSVGPathSegCurvetoCubicAbs(1, 2, 3, 4, 5, 6).y1, "4");
    assert.equal(path.createSVGPathSegCurvetoCubicAbs(1, 2, 3, 4, 5, 6).x2, "5");
    assert.equal(path.createSVGPathSegCurvetoCubicAbs(1, 2, 3, 4, 5, 6).y2, "6");
    assert.equal(path.createSVGPathSegCurvetoCubicRel(1, 2, 3, 4, 5, 6).pathSegType, SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL);
    assert.equal(path.createSVGPathSegCurvetoCubicRel(1, 2, 3, 4, 5, 6).pathSegTypeAsLetter, "c");
    assert.equal(path.createSVGPathSegCurvetoCubicRel(1, 2, 3, 4, 5, 6).x, "1");
    assert.equal(path.createSVGPathSegCurvetoCubicRel(1, 2, 3, 4, 5, 6).y, "2");
    assert.equal(path.createSVGPathSegCurvetoCubicRel(1, 2, 3, 4, 5, 6).x1, "3");
    assert.equal(path.createSVGPathSegCurvetoCubicRel(1, 2, 3, 4, 5, 6).y1, "4");
    assert.equal(path.createSVGPathSegCurvetoCubicRel(1, 2, 3, 4, 5, 6).x2, "5");
    assert.equal(path.createSVGPathSegCurvetoCubicRel(1, 2, 3, 4, 5, 6).y2, "6");
    assert.equal(path.createSVGPathSegCurvetoQuadraticAbs(1, 2, 3, 4).pathSegType, SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS);
    assert.equal(path.createSVGPathSegCurvetoQuadraticAbs(1, 2, 3, 4).pathSegTypeAsLetter, "Q");
    assert.equal(path.createSVGPathSegCurvetoQuadraticAbs(1, 2, 3, 4).x, "1");
    assert.equal(path.createSVGPathSegCurvetoQuadraticAbs(1, 2, 3, 4).y, "2");
    assert.equal(path.createSVGPathSegCurvetoQuadraticAbs(1, 2, 3, 4).x1, "3");
    assert.equal(path.createSVGPathSegCurvetoQuadraticAbs(1, 2, 3, 4).y1, "4");
    assert.equal(path.createSVGPathSegCurvetoQuadraticRel(1, 2, 3, 4).pathSegType, SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL);
    assert.equal(path.createSVGPathSegCurvetoQuadraticRel(1, 2, 3, 4).pathSegTypeAsLetter, "q");
    assert.equal(path.createSVGPathSegCurvetoQuadraticRel(1, 2, 3, 4).x, "1");
    assert.equal(path.createSVGPathSegCurvetoQuadraticRel(1, 2, 3, 4).y, "2");
    assert.equal(path.createSVGPathSegCurvetoQuadraticRel(1, 2, 3, 4).x1, "3");
    assert.equal(path.createSVGPathSegCurvetoQuadraticRel(1, 2, 3, 4).y1, "4");
    assert.equal(path.createSVGPathSegArcAbs(1, 2, 3, 4, 5, false, false).pathSegType, SVGPathSeg.PATHSEG_ARC_ABS);
    assert.equal(path.createSVGPathSegArcAbs(1, 2, 3, 4, 5, false, false).pathSegTypeAsLetter, "A");
    assert.equal(path.createSVGPathSegArcAbs(1, 2, 3, 4, 5, false, false).x, "1");
    assert.equal(path.createSVGPathSegArcAbs(1, 2, 3, 4, 5, false, false).y, "2");
    assert.equal(path.createSVGPathSegArcAbs(1, 2, 3, 4, 5, false, false).r1, "3");
    assert.equal(path.createSVGPathSegArcAbs(1, 2, 3, 4, 5, false, false).r2, "4");
    assert.equal(path.createSVGPathSegArcAbs(1, 2, 3, 4, 5, false, false).angle, "5");
    assert.equal(path.createSVGPathSegArcAbs(1, 2, 3, 4, 5, false, false).largeArcFlag, false);
    assert.equal(path.createSVGPathSegArcAbs(1, 2, 3, 4, 5, true, false).largeArcFlag, true);
    assert.equal(path.createSVGPathSegArcAbs(1, 2, 3, 4, 5, false, false).sweepFlag, false);
    assert.equal(path.createSVGPathSegArcAbs(1, 2, 3, 4, 5, false, true).sweepFlag, true);
    assert.equal(path.createSVGPathSegArcRel(1, 2, 3, 4, 5, false, false).pathSegType, SVGPathSeg.PATHSEG_ARC_REL);
    assert.equal(path.createSVGPathSegArcRel(1, 2, 3, 4, 5, false, false).pathSegTypeAsLetter, "a");
    assert.equal(path.createSVGPathSegArcRel(1, 2, 3, 4, 5, false, false).x, "1");
    assert.equal(path.createSVGPathSegArcRel(1, 2, 3, 4, 5, false, false).y, "2");
    assert.equal(path.createSVGPathSegArcRel(1, 2, 3, 4, 5, false, false).r1, "3");
    assert.equal(path.createSVGPathSegArcRel(1, 2, 3, 4, 5, false, false).r2, "4");
    assert.equal(path.createSVGPathSegArcRel(1, 2, 3, 4, 5, false, false).angle, "5");
    assert.equal(path.createSVGPathSegArcRel(1, 2, 3, 4, 5, false, false).largeArcFlag, false);
    assert.equal(path.createSVGPathSegArcRel(1, 2, 3, 4, 5, true, false).largeArcFlag, true);
    assert.equal(path.createSVGPathSegArcRel(1, 2, 3, 4, 5, false, false).sweepFlag, false);
    assert.equal(path.createSVGPathSegArcRel(1, 2, 3, 4, 5, false, true).sweepFlag, true);
    assert.equal(path.createSVGPathSegLinetoHorizontalAbs(1).pathSegType, SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS);
    assert.equal(path.createSVGPathSegLinetoHorizontalAbs(1).pathSegTypeAsLetter, "H");
    assert.equal(path.createSVGPathSegLinetoHorizontalAbs(1).x, "1");
    assert.equal(path.createSVGPathSegLinetoHorizontalRel(1).pathSegType, SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL);
    assert.equal(path.createSVGPathSegLinetoHorizontalRel(1).pathSegTypeAsLetter, "h");
    assert.equal(path.createSVGPathSegLinetoHorizontalRel(1).x, "1");
    assert.equal(path.createSVGPathSegLinetoVerticalAbs(1).pathSegType, SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS);
    assert.equal(path.createSVGPathSegLinetoVerticalAbs(1).pathSegTypeAsLetter, "V");
    assert.equal(path.createSVGPathSegLinetoVerticalAbs(1).y, "1");
    assert.equal(path.createSVGPathSegLinetoVerticalRel(1).pathSegType, SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL);
    assert.equal(path.createSVGPathSegLinetoVerticalRel(1).pathSegTypeAsLetter, "v");
    assert.equal(path.createSVGPathSegLinetoVerticalRel(1).y, "1");
    assert.equal(path.createSVGPathSegCurvetoCubicSmoothAbs(1, 2, 3, 4).pathSegType, SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS);
    assert.equal(path.createSVGPathSegCurvetoCubicSmoothAbs(1, 2, 3, 4).pathSegTypeAsLetter, "S");
    assert.equal(path.createSVGPathSegCurvetoCubicSmoothAbs(1, 2, 3, 4).x, "1");
    assert.equal(path.createSVGPathSegCurvetoCubicSmoothAbs(1, 2, 3, 4).y, "2");
    assert.equal(path.createSVGPathSegCurvetoCubicSmoothAbs(1, 2, 3, 4).x2, "3");
    assert.equal(path.createSVGPathSegCurvetoCubicSmoothAbs(1, 2, 3, 4).y2, "4");
    assert.equal(path.createSVGPathSegCurvetoCubicSmoothRel(1, 2, 3, 4).pathSegType, SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL);
    assert.equal(path.createSVGPathSegCurvetoCubicSmoothRel(1, 2, 3, 4).pathSegTypeAsLetter, "s");
    assert.equal(path.createSVGPathSegCurvetoCubicSmoothRel(1, 2, 3, 4).x, "1");
    assert.equal(path.createSVGPathSegCurvetoCubicSmoothRel(1, 2, 3, 4).y, "2");
    assert.equal(path.createSVGPathSegCurvetoCubicSmoothRel(1, 2, 3, 4).x2, "3");
    assert.equal(path.createSVGPathSegCurvetoCubicSmoothRel(1, 2, 3, 4).y2, "4");
    assert.equal(path.createSVGPathSegCurvetoQuadraticSmoothAbs(1, 2).pathSegType, SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS);
    assert.equal(path.createSVGPathSegCurvetoQuadraticSmoothAbs(1, 2).pathSegTypeAsLetter, "T");
    assert.equal(path.createSVGPathSegCurvetoQuadraticSmoothAbs(1, 2).x, "1");
    assert.equal(path.createSVGPathSegCurvetoQuadraticSmoothAbs(1, 2).y, "2");
    assert.equal(path.createSVGPathSegCurvetoQuadraticSmoothRel(1, 2).pathSegType, SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL);
    assert.equal(path.createSVGPathSegCurvetoQuadraticSmoothRel(1, 2).pathSegTypeAsLetter, "t");
    assert.equal(path.createSVGPathSegCurvetoQuadraticSmoothRel(1, 2).x, "1");
    assert.equal(path.createSVGPathSegCurvetoQuadraticSmoothRel(1, 2).y, "2");
});

// LayoutTests/svg/dom/svg2-inheritance.html
QUnit.test("Validate the path seg inheritance model", function(assert) {
    function checkParent(type, expectedParent) {
        assert.ok(window[type]);
        var parentPrototype = window[type].prototype.__proto__;
        var expectedPrototype = window[expectedParent] ? window[expectedParent].prototype : null;

        assert.equal(parentPrototype, expectedPrototype);
    }

    checkParent("SVGPathSeg", "Object");
    checkParent("SVGPathSegArcAbs", "SVGPathSeg");
    checkParent("SVGPathSegArcRel", "SVGPathSeg");
    checkParent("SVGPathSegClosePath", "SVGPathSeg");
    checkParent("SVGPathSegCurvetoCubicAbs", "SVGPathSeg");
    checkParent("SVGPathSegCurvetoCubicRel", "SVGPathSeg");
    checkParent("SVGPathSegCurvetoCubicSmoothAbs", "SVGPathSeg");
    checkParent("SVGPathSegCurvetoCubicSmoothRel", "SVGPathSeg");
    checkParent("SVGPathSegCurvetoQuadraticAbs", "SVGPathSeg");
    checkParent("SVGPathSegCurvetoQuadraticRel", "SVGPathSeg");
    checkParent("SVGPathSegCurvetoQuadraticSmoothAbs", "SVGPathSeg");
    checkParent("SVGPathSegCurvetoQuadraticSmoothRel", "SVGPathSeg");
    checkParent("SVGPathSegLinetoAbs", "SVGPathSeg");
    checkParent("SVGPathSegLinetoHorizontalAbs", "SVGPathSeg");
    checkParent("SVGPathSegLinetoHorizontalRel", "SVGPathSeg");
    checkParent("SVGPathSegLinetoRel", "SVGPathSeg");
    checkParent("SVGPathSegLinetoVerticalAbs", "SVGPathSeg");
    checkParent("SVGPathSegLinetoVerticalRel", "SVGPathSeg");
    checkParent("SVGPathSegList", "Object");
    checkParent("SVGPathSegMovetoAbs", "SVGPathSeg");
    checkParent("SVGPathSegMovetoRel", "SVGPathSeg");
});

QUnit.test("Validate the pathSegList inheritance model", function(assert) {
    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    assert.ok(path.pathSegList instanceof SVGPathSegList);
});

// Source/core/svg/SVGPathParserTest.cpp
QUnit.test("Path parsing", function(assert) {
    // This test is only for the polyfill.
    if (!SVGPathSegList._pathSegArrayAsString) {
        expect(0);
        return;
    }

    function checkParsing(string, expected) {
        var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", string);
        var pathSegArray = path.pathSegList._parsePath(string);
        var actual = SVGPathSegList._pathSegArrayAsString(pathSegArray);
        assert.equal(actual, expected);
    }

    checkParsing("M1,2", "M 1 2");
    checkParsing("m1,2", "m 1 2");
    checkParsing("M100,200 m3,4", "M 100 200 m 3 4");
    checkParsing("M100,200 L3,4", "M 100 200 L 3 4");
    checkParsing("M100,200 l3,4", "M 100 200 l 3 4");
    checkParsing("M100,200 H3", "M 100 200 H 3");
    checkParsing("M100,200 h3", "M 100 200 h 3");
    checkParsing("M100,200 V3", "M 100 200 V 3");
    checkParsing("M100,200 v3", "M 100 200 v 3");
    checkParsing("M100,200 Z", "M 100 200 z");
    checkParsing("M100,200 z", "M 100 200 z");
    checkParsing("M100,200 C3,4,5,6,7,8", "M 100 200 C 3 4 5 6 7 8");
    checkParsing("M100,200 c3,4,5,6,7,8", "M 100 200 c 3 4 5 6 7 8");
    checkParsing("M100,200 S3,4,5,6", "M 100 200 S 3 4 5 6");
    checkParsing("M100,200 s3,4,5,6", "M 100 200 s 3 4 5 6");
    checkParsing("M100,200 Q3,4,5,6", "M 100 200 Q 3 4 5 6");
    checkParsing("M100,200 q3,4,5,6", "M 100 200 q 3 4 5 6");
    checkParsing("M100,200 T3,4", "M 100 200 T 3 4");
    checkParsing("M100,200 t3,4", "M 100 200 t 3 4");
    checkParsing("M100,200 A3,4,5,0,0,6,7", "M 100 200 A 3 4 5 0 0 6 7");
    checkParsing("M100,200 A3,4,5,1,0,6,7", "M 100 200 A 3 4 5 1 0 6 7");
    checkParsing("M100,200 A3,4,5,0,1,6,7", "M 100 200 A 3 4 5 0 1 6 7");
    checkParsing("M100,200 A3,4,5,1,1,6,7", "M 100 200 A 3 4 5 1 1 6 7");
    checkParsing("M100,200 a3,4,5,0,0,6,7", "M 100 200 a 3 4 5 0 0 6 7");
    checkParsing("M100,200 a3,4,5,0,1,6,7", "M 100 200 a 3 4 5 0 1 6 7");
    checkParsing("M100,200 a3,4,5,1,0,6,7", "M 100 200 a 3 4 5 1 0 6 7");
    checkParsing("M100,200 a3,4,5,1,1,6,7", "M 100 200 a 3 4 5 1 1 6 7");
    checkParsing("M100,200 a3,4,5,006,7", "M 100 200 a 3 4 5 0 0 6 7");
    checkParsing("M100,200 a3,4,5,016,7", "M 100 200 a 3 4 5 0 1 6 7");
    checkParsing("M100,200 a3,4,5,106,7", "M 100 200 a 3 4 5 1 0 6 7");
    checkParsing("M100,200 a3,4,5,116,7", "M 100 200 a 3 4 5 1 1 6 7");

    checkParsing("M100,200 a0,4,5,0,0,10,0 a4,0,5,0,0,0,10 a0,0,5,0,0,-10,0 z", "M 100 200 a 0 4 5 0 0 10 0 a 4 0 5 0 0 0 10 a 0 0 5 0 0 -10 0 z");

    checkParsing("M1,2,3,4", "M 1 2 L 3 4");
    checkParsing("m100,200,3,4", "m 100 200 l 3 4");

    checkParsing("M 100-200", "M 100 -200");
    checkParsing("M 0.6.5", "M 0.6000000000000001 0.5");

    checkParsing(" M1,2", "M 1 2");
    checkParsing("  M1,2", "M 1 2");
    checkParsing("\tM1,2", "M 1 2");
    checkParsing("\nM1,2", "M 1 2");
    checkParsing("\rM1,2", "M 1 2");
    checkParsing("M1,2 ", "M 1 2");
    checkParsing("M1,2\t", "M 1 2");
    checkParsing("M1,2\n", "M 1 2");
    checkParsing("M1,2\r", "M 1 2");

    checkParsing("", "");
    checkParsing(" ", "");
    checkParsing("M.1 .2 L.3 .4 .5 .6", "M 0.1 0.2 L 0.30000000000000004 0.4 L 0.5 0.6000000000000001");

    checkParsing("M1,1h2,3", "M 1 1 h 2 h 3");
    checkParsing("M1,1H2,3", "M 1 1 H 2 H 3");
    checkParsing("M1,1v2,3", "M 1 1 v 2 v 3");
    checkParsing("M1,1V2,3", "M 1 1 V 2 V 3");

    checkParsing("M1,1c2,3 4,5 6,7 8,9 10,11 12,13", "M 1 1 c 2 3 4 5 6 7 c 8 9 10 11 12 13");
    checkParsing("M1,1C2,3 4,5 6,7 8,9 10,11 12,13", "M 1 1 C 2 3 4 5 6 7 C 8 9 10 11 12 13");
    checkParsing("M1,1s2,3 4,5 6,7 8,9", "M 1 1 s 2 3 4 5 s 6 7 8 9");
    checkParsing("M1,1S2,3 4,5 6,7 8,9", "M 1 1 S 2 3 4 5 S 6 7 8 9");
    checkParsing("M1,1q2,3 4,5 6,7 8,9", "M 1 1 q 2 3 4 5 q 6 7 8 9");
    checkParsing("M1,1Q2,3 4,5 6,7 8,9", "M 1 1 Q 2 3 4 5 Q 6 7 8 9");
    checkParsing("M1,1t2,3 4,5", "M 1 1 t 2 3 t 4 5");
    checkParsing("M1,1T2,3 4,5", "M 1 1 T 2 3 T 4 5");
    checkParsing("M1,1a2,3,4,0,0,5,6 7,8,9,0,0,10,11", "M 1 1 a 2 3 4 0 0 5 6 a 7 8 9 0 0 10 11");
    checkParsing("M1,1A2,3,4,0,0,5,6 7,8,9,0,0,10,11", "M 1 1 A 2 3 4 0 0 5 6 A 7 8 9 0 0 10 11");
});

// LayoutTests/svg/dom/SVGPathSegList-appendItem.xhtml
QUnit.test("Test of SVGPathSegList::appendItem(...)", function(assert) {
    var path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path1.setAttribute("d", "M 0 0 L 100 0 L 100 100");
    var path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path2.setAttribute("d", "M 0 0 L 50 100 h 100 h 100 v 100");

    // Check initial 'pathSegList' value of path1
    assert.equal(path1.pathSegList.numberOfItems, "3");

    assert.equal(path1.pathSegList.getItem(0).toString(), "[object SVGPathSegMovetoAbs]");
    assert.equal(path1.pathSegList.getItem(0).x, "0");
    assert.equal(path1.pathSegList.getItem(0).y, "0");
    assert.equal(path1.pathSegList.getItem(1).toString(), "[object SVGPathSegLinetoAbs]");
    assert.equal(path1.pathSegList.getItem(1).x, "100");
    assert.equal(path1.pathSegList.getItem(1).y, "0");
    assert.equal(path1.pathSegList.getItem(2).toString(), "[object SVGPathSegLinetoAbs]");
    assert.equal(path1.pathSegList.getItem(2).x, "100");
    assert.equal(path1.pathSegList.getItem(2).y, "100");

    // Check initial 'pathSegList' value of path2
    assert.equal(path2.pathSegList.numberOfItems, "5");
    assert.equal(path2.pathSegList.getItem(0).toString(), "[object SVGPathSegMovetoAbs]");
    assert.equal(path2.pathSegList.getItem(0).x, "0");
    assert.equal(path2.pathSegList.getItem(0).y, "0");
    assert.equal(path2.pathSegList.getItem(1).toString(), "[object SVGPathSegLinetoAbs]");
    assert.equal(path2.pathSegList.getItem(1).x, "50");
    assert.equal(path2.pathSegList.getItem(1).y, "100");
    assert.equal(path2.pathSegList.getItem(2).toString(), "[object SVGPathSegLinetoHorizontalRel]");
    assert.equal(path2.pathSegList.getItem(2).x, "100");
    assert.equal(path2.pathSegList.getItem(3).toString(), "[object SVGPathSegLinetoHorizontalRel]");
    assert.equal(path2.pathSegList.getItem(3).x, "100");
    assert.equal(path2.pathSegList.getItem(4).toString(), "[object SVGPathSegLinetoVerticalRel]");
    assert.equal(path2.pathSegList.getItem(4).y, "100");

    // Negate x value of fourth segment in path2
    assert.equal(path2.pathSegList.getItem(3).x = -path2.pathSegList.getItem(3).x, "-100");

    // Append second item from path1 to path2 list
    assert.equal(path2.pathSegList.appendItem(path2.pathSegList.getItem(3)).toString(), "[object SVGPathSegLinetoHorizontalRel]");
    assert.equal(path2.pathSegList.numberOfItems, "6");
    assert.equal(path2.pathSegList.getItem(0).toString(), "[object SVGPathSegMovetoAbs]");
    assert.equal(path2.pathSegList.getItem(0).x, "0");
    assert.equal(path2.pathSegList.getItem(0).y, "0");
    assert.equal(path2.pathSegList.getItem(1).toString(), "[object SVGPathSegLinetoAbs]");
    assert.equal(path2.pathSegList.getItem(1).x, "50");
    assert.equal(path2.pathSegList.getItem(1).y, "100");
    assert.equal(path2.pathSegList.getItem(2).toString(), "[object SVGPathSegLinetoHorizontalRel]");
    assert.equal(path2.pathSegList.getItem(2).x, "100");
    assert.equal(path2.pathSegList.getItem(3).toString(), "[object SVGPathSegLinetoHorizontalRel]");
    assert.equal(path2.pathSegList.getItem(3).x, "-100");
    assert.equal(path2.pathSegList.getItem(4).toString(), "[object SVGPathSegLinetoVerticalRel]");
    assert.equal(path2.pathSegList.getItem(4).y, "100");
    assert.equal(path2.pathSegList.getItem(5).toString(), "[object SVGPathSegLinetoHorizontalRel]");
    assert.equal(path2.pathSegList.getItem(5).x, "-100");

    // Append second item from path2 to path1 list
    assert.equal(path1.pathSegList.appendItem(path2.pathSegList.getItem(1)).toString(), "[object SVGPathSegLinetoAbs]");

    // Change last item of path1 list, that came from path2 list, assure it's updating path1
    assert.equal(path1.pathSegList.getItem(3).x -= 50, "0");

    // Reset points attribute to M 0 0 L 100 0 v 100"
    path2.setAttribute('d', 'M 0 0 L 100 0 v 100');

    // Append fourth item from path1 to path2 list - now should look like a rectangle
    assert.equal(path2.pathSegList.appendItem(path1.pathSegList.getItem(3)).toString(), "[object SVGPathSegLinetoAbs]");

    // Check final 'pathSegList' value of path1
    assert.equal(path1.pathSegList.numberOfItems, "4");
    assert.equal(path1.pathSegList.getItem(0).toString(), "[object SVGPathSegMovetoAbs]");
    assert.equal(path1.pathSegList.getItem(0).x, "0");
    assert.equal(path1.pathSegList.getItem(0).y, "0");
    assert.equal(path1.pathSegList.getItem(1).toString(), "[object SVGPathSegLinetoAbs]");
    assert.equal(path1.pathSegList.getItem(1).x, "100");
    assert.equal(path1.pathSegList.getItem(1).y, "0");
    assert.equal(path1.pathSegList.getItem(2).toString(), "[object SVGPathSegLinetoAbs]");
    assert.equal(path1.pathSegList.getItem(2).x, "100");
    assert.equal(path1.pathSegList.getItem(2).y, "100");
    assert.equal(path1.pathSegList.getItem(3).toString(), "[object SVGPathSegLinetoAbs]");
    assert.equal(path1.pathSegList.getItem(3).x, "0");
    assert.equal(path1.pathSegList.getItem(3).y, "100");

    // Check final 'pathSegList' value of path2
    assert.equal(path2.pathSegList.numberOfItems, "4");
    assert.equal(path2.pathSegList.getItem(0).toString(), "[object SVGPathSegMovetoAbs]");
    assert.equal(path2.pathSegList.getItem(0).x, "0");
    assert.equal(path2.pathSegList.getItem(0).y, "0");
    assert.equal(path2.pathSegList.getItem(1).toString(), "[object SVGPathSegLinetoAbs]");
    assert.equal(path2.pathSegList.getItem(1).x, "100");
    assert.equal(path1.pathSegList.getItem(1).y, "0");
    assert.equal(path2.pathSegList.getItem(2).toString(), "[object SVGPathSegLinetoVerticalRel]");
    assert.equal(path2.pathSegList.getItem(2).y, "100");
    assert.equal(path2.pathSegList.getItem(3).toString(), "[object SVGPathSegLinetoAbs]");
    assert.equal(path2.pathSegList.getItem(3).x, "0");
    assert.equal(path1.pathSegList.getItem(3).y, "100");
});

// LayoutTests/svg/dom/SVGPathSegList-clear-and-initialize.xhtml
QUnit.test("Test of SVGPathSegList::clear and SVGPathSegList::initialize", function(assert) {
    var path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path1.setAttribute("d", "M 100 100 L 100 0 L 100 100");
    var path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path2.setAttribute("d", "M 50 50 L 0 100 M 0 0");

    // Check initial 'pathSegList' value of path1
    assert.equal(path1.pathSegList.numberOfItems, "3");
    assert.equal(path1.pathSegList.getItem(0).toString(), "[object SVGPathSegMovetoAbs]");
    assert.equal(path1.pathSegList.getItem(0).x, "100");
    assert.equal(path1.pathSegList.getItem(0).y, "100");
    assert.equal(path1.pathSegList.getItem(1).toString(), "[object SVGPathSegLinetoAbs]");
    assert.equal(path1.pathSegList.getItem(1).x, "100");
    assert.equal(path1.pathSegList.getItem(1).y, "0");
    assert.equal(path1.pathSegList.getItem(2).toString(), "[object SVGPathSegLinetoAbs]");
    assert.equal(path1.pathSegList.getItem(2).x, "100");
    assert.equal(path1.pathSegList.getItem(2).y, "100");

    // Check initial 'pathSegList' value of path2
    assert.equal(path2.pathSegList.numberOfItems, "3");
    assert.equal(path2.pathSegList.getItem(0).toString(), "[object SVGPathSegMovetoAbs]");
    assert.equal(path2.pathSegList.getItem(0).x, "50");
    assert.equal(path2.pathSegList.getItem(0).y, "50");
    assert.equal(path2.pathSegList.getItem(1).toString(), "[object SVGPathSegLinetoAbs]");
    assert.equal(path2.pathSegList.getItem(1).x, "0");
    assert.equal(path2.pathSegList.getItem(1).y, "100");
    assert.equal(path2.pathSegList.getItem(2).toString(), "[object SVGPathSegMovetoAbs]");
    assert.equal(path2.pathSegList.getItem(2).x, "0");
    assert.equal(path2.pathSegList.getItem(2).y, "0");

    // Cache first item of path1 in local variable 'item0'
    var item0 = path1.pathSegList.getItem(0);
    assert.equal(item0.x, "100");
    assert.equal(item0.y, "100");

    // Clear path1 segment list
    path1.pathSegList.clear()

    // Verify that item0 is still alive, and can be modified
    assert.equal(item0.x, "100");
    assert.equal(item0.y, "100");
    assert.equal(item0.x += 50, "150");
    assert.equal(item0.y += 50, "150");

    // Check intermediate list state of path1
    assert.equal(path1.pathSegList.numberOfItems, "0");
    assert.throws(function() {
        path1.pathSegList.getItem(0);
    });

    // Check intermediate list state of path2
    assert.equal(path2.pathSegList.numberOfItems, "3");
    assert.equal(path2.pathSegList.getItem(0).toString(), "[object SVGPathSegMovetoAbs]");
    assert.equal(path2.pathSegList.getItem(0).x, "50");
    assert.equal(path2.pathSegList.getItem(0).y, "50");
    assert.equal(path2.pathSegList.getItem(1).toString(), "[object SVGPathSegLinetoAbs]");
    assert.equal(path2.pathSegList.getItem(1).x, "0");
    assert.equal(path2.pathSegList.getItem(1).y, "100");
    assert.equal(path2.pathSegList.getItem(2).toString(), "[object SVGPathSegMovetoAbs]");
    assert.equal(path2.pathSegList.getItem(2).x, "0");
    assert.equal(path2.pathSegList.getItem(2).y, "0");

    // Initialize path1 list with first item of path2
    assert.equal(path1.pathSegList.initialize(path2.pathSegList.getItem(0)).toString(), "[object SVGPathSegMovetoAbs]");

    // Check intermediate list state of path1
    assert.equal(path1.pathSegList.numberOfItems, "1");
    assert.equal(path1.pathSegList.getItem(0).toString(), "[object SVGPathSegMovetoAbs]");
    assert.equal(path1.pathSegList.getItem(0).x, "50");
    assert.equal(path1.pathSegList.getItem(0).y, "50");

    // Check intermediate list state of path2
    assert.equal(path2.pathSegList.numberOfItems, "3");
    assert.equal(path2.pathSegList.getItem(0).toString(), "[object SVGPathSegMovetoAbs]");
    assert.equal(path2.pathSegList.getItem(0).x, "50");
    assert.equal(path2.pathSegList.getItem(0).y, "50");
    assert.equal(path2.pathSegList.getItem(1).toString(), "[object SVGPathSegLinetoAbs]");
    assert.equal(path2.pathSegList.getItem(1).x, "0");
    assert.equal(path2.pathSegList.getItem(1).y, "100");
    assert.equal(path2.pathSegList.getItem(2).toString(), "[object SVGPathSegMovetoAbs]");
    assert.equal(path2.pathSegList.getItem(2).x, "0");
    assert.equal(path2.pathSegList.getItem(2).y, "0");

    // Initialize path2 list with item0
    assert.equal(path2.pathSegList.initialize(item0).toString(), "[object SVGPathSegMovetoAbs]");

    // Check final list state of path1
    assert.equal(path1.pathSegList.numberOfItems, "1");
    assert.equal(path1.pathSegList.getItem(0).toString(), "[object SVGPathSegMovetoAbs]");
    assert.equal(path1.pathSegList.getItem(0).x, "50");
    assert.equal(path1.pathSegList.getItem(0).y, "50");

    // Check final list state of path2
    assert.equal(path2.pathSegList.numberOfItems, "1");
    assert.equal(path2.pathSegList.getItem(0).toString(), "[object SVGPathSegMovetoAbs]");
    assert.equal(path2.pathSegList.getItem(0).x, "150");
    assert.equal(path2.pathSegList.getItem(0).y, "150");
});