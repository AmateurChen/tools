package lerrain.tool.script.warlock.statement;

import lerrain.tool.formula.Factors;
import lerrain.tool.formula.Value;
import lerrain.tool.script.ScriptRuntimeException;
import lerrain.tool.script.SyntaxException;
import lerrain.tool.script.warlock.Code;
import lerrain.tool.script.warlock.CodeImpl;
import lerrain.tool.script.warlock.Reference;
import lerrain.tool.script.warlock.analyse.Expression;
import lerrain.tool.script.warlock.analyse.Words;

public class ArithmeticSubSub extends CodeImpl
{
	Code l, r;
	
	public ArithmeticSubSub(Words ws, int i)
	{
		super(ws, i);

		if (i == 0)
			r = Expression.expressionOf(ws.cut(i + 1));
		else if (i == ws.size() - 1)
			l = Expression.expressionOf(ws.cut(0, i));
		
		if ((l == null && r == null) || (!(l instanceof Reference) && !(r instanceof Reference)))
			throw new SyntaxException("递减运算要求左右之一为引用");
	}

	public Object run(Factors factors)
	{
		try
		{
			if (l != null)
			{
				Number v = (Number)l.run(factors);
				if (isInt(v))
					((Reference) l).let(factors, v.intValue() - 1);
				else if (isLong(v))
					((Reference) l).let(factors, v.longValue() - 1);
				else
					((Reference) l).let(factors, v.doubleValue() - 1);
				return v;
			}
			else
			{
				Number v = (Number)r.run(factors);
				Object n;

				if (isInt(v))
					n = v.intValue() - 1;
				else if (isLong(v))
					n = v.longValue() - 1;
				else
					n = v.doubleValue() - 1;

				((Reference) r).let(factors, n);
				return n;
			}
		}
		catch (Exception e)
		{
			throw new ScriptRuntimeException(this, factors, e);
		}
	}

	public String toText(String space)
	{
		if (l != null)
			return l.toText("") + "--";
		else
			return "--" + l.toText("");
	}
}
