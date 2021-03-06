package lerrain.tool.script.warlock.statement;

import lerrain.tool.formula.Factors;
import lerrain.tool.formula.Function;
import lerrain.tool.formula.Value;
import lerrain.tool.script.Script;
import lerrain.tool.script.Stack;
import lerrain.tool.script.warlock.Code;
import lerrain.tool.script.warlock.Wrap;
import lerrain.tool.script.warlock.analyse.Expression;
import lerrain.tool.script.warlock.analyse.Syntax;
import lerrain.tool.script.warlock.analyse.Words;

public class StatementThread implements Code
{
	Code pre, code;

	public StatementThread(Words ws)
	{
		int left = 1; //callback左括号的位置
		if (ws.getType(left) == Words.PRT)
		{
			int right = Syntax.findRightBrace(ws, left + 1);
			Words preWords = ws.cut(left + 1, right);
			pre = preWords.size() > 0 ? new Script(preWords) : null;
			left = right + 1;
		}

		if (ws.getType(left) != Words.BRACE)
			throw new RuntimeException("thread 代码体需要以大括号包裹");

		int right = Syntax.findRightBrace(ws, left + 1);
		code = new Script(ws.cut(left + 1, right));
	}

	public Object run(final Factors factors)
	{
		final Stack stack = new Stack(factors);
		Object r = pre == null ? null : pre.run(stack);

		Thread th = new Thread(new Runnable()
		{
			@Override
			public void run()
			{
				code.run(stack);
			}
		});
		th.start();

		return r;
	}

	public String toText(String space)
	{
		StringBuffer buf = new StringBuffer("THREAD (");
		buf.append(pre == null ? "" : pre.toText(""));
		buf.append(")\n");
		buf.append(space + "{\n");
		buf.append(code.toText(space + "    ") + "\n");
		buf.append(space + "}");

		return buf.toString();
	}
}
