package lerrain.tool.script.warlock.function;

import lerrain.tool.formula.Factors;
import lerrain.tool.formula.Function;
import lerrain.tool.formula.Value;

import java.math.BigDecimal;

public class FunctionLong implements Function
{
	public Object run(Object[] v, Factors factors)
	{
		Object x = v[0];

		if (x instanceof Long)
			return x;
		if (x instanceof Number)
			return ((Number) x).longValue();
		if (x instanceof String)
			return Long.parseLong((String)x);

		throw new RuntimeException("错误的long运算");
	}
}
