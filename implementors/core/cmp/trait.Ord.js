(function() {var implementors = {};
implementors["chalk_engine"] = [{"text":"impl Ord for StackIndex","synthetic":false,"types":[]},{"text":"impl Ord for AnswerIndex","synthetic":false,"types":[]},{"text":"impl Ord for TableIndex","synthetic":false,"types":[]},{"text":"impl Ord for TimeStamp","synthetic":false,"types":[]}];
implementors["chalk_integration"] = [{"text":"impl Ord for RawId","synthetic":false,"types":[]},{"text":"impl Ord for ChalkIr","synthetic":false,"types":[]},{"text":"impl Ord for TypeSort","synthetic":false,"types":[]},{"text":"impl Ord for SolverChoice","synthetic":false,"types":[]}];
implementors["chalk_ir"] = [{"text":"impl Ord for Void","synthetic":false,"types":[]},{"text":"impl Ord for NoSolution","synthetic":false,"types":[]},{"text":"impl Ord for IntTy","synthetic":false,"types":[]},{"text":"impl Ord for UintTy","synthetic":false,"types":[]},{"text":"impl Ord for FloatTy","synthetic":false,"types":[]},{"text":"impl Ord for Scalar","synthetic":false,"types":[]},{"text":"impl Ord for Safety","synthetic":false,"types":[]},{"text":"impl Ord for Mutability","synthetic":false,"types":[]},{"text":"impl Ord for UniverseIndex","synthetic":false,"types":[]},{"text":"impl&lt;I:&nbsp;Ord + Interner&gt; Ord for AdtId&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I::InternedAdtId: Ord,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;I:&nbsp;Ord + Interner&gt; Ord for TraitId&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I::DefId: Ord,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;I:&nbsp;Ord + Interner&gt; Ord for ImplId&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I::DefId: Ord,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;I:&nbsp;Ord + Interner&gt; Ord for ClauseId&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I::DefId: Ord,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;I:&nbsp;Ord + Interner&gt; Ord for AssocTypeId&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I::DefId: Ord,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;I:&nbsp;Ord + Interner&gt; Ord for OpaqueTyId&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I::DefId: Ord,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;I:&nbsp;Ord + Interner&gt; Ord for FnDefId&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I::DefId: Ord,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;I:&nbsp;Ord + Interner&gt; Ord for ClosureId&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I::DefId: Ord,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;I:&nbsp;Ord + Interner&gt; Ord for GeneratorId&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I::DefId: Ord,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;I:&nbsp;Ord + Interner&gt; Ord for ForeignDefId&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I::DefId: Ord,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;I:&nbsp;Ord + Interner&gt; Ord for Ty&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I::InternedType: Ord,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Ord for BoundVar","synthetic":false,"types":[]},{"text":"impl Ord for DebruijnIndex","synthetic":false,"types":[]},{"text":"impl Ord for InferenceVar","synthetic":false,"types":[]},{"text":"impl&lt;I:&nbsp;Ord + Interner&gt; Ord for Const&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I::InternedConst: Ord,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;I:&nbsp;Ord + Interner&gt; Ord for ConcreteConst&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I::InternedConcreteConst: Ord,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;I:&nbsp;Ord + Interner&gt; Ord for Lifetime&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I::InternedLifetime: Ord,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;I:&nbsp;Ord + Interner&gt; Ord for LifetimeData&lt;I&gt;","synthetic":false,"types":[]},{"text":"impl Ord for PlaceholderIndex","synthetic":false,"types":[]},{"text":"impl&lt;I:&nbsp;Ord + Interner&gt; Ord for GenericArg&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I::InternedGenericArg: Ord,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;I:&nbsp;Ord + Interner&gt; Ord for ProgramClause&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I::InternedProgramClause: Ord,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;I:&nbsp;Ord + Interner&gt; Ord for Variances&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I::InternedVariances: Ord,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;I:&nbsp;Ord + Interner&gt; Ord for Goal&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I::InternedGoal: Ord,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Ord for QuantifierKind","synthetic":false,"types":[]},{"text":"impl&lt;I:&nbsp;Ord + Interner&gt; Ord for QuantifiedWhereClauses&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I::InternedQuantifiedWhereClauses: Ord,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;I:&nbsp;Ord + Interner&gt; Ord for ProgramClauses&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I::InternedProgramClauses: Ord,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;I:&nbsp;Ord + Interner&gt; Ord for VariableKinds&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I::InternedVariableKinds: Ord,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;I:&nbsp;Ord + Interner&gt; Ord for CanonicalVarKinds&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I::InternedCanonicalVarKinds: Ord,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;I:&nbsp;Ord + Interner&gt; Ord for Goals&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I::InternedGoals: Ord,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;I:&nbsp;Ord + Interner&gt; Ord for Constraints&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I::InternedConstraints: Ord,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;I:&nbsp;Ord + Interner&gt; Ord for Substitution&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I::InternedSubstitution: Ord,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["chalk_recursive"] = [{"text":"impl Ord for DepthFirstNumber","synthetic":false,"types":[]},{"text":"impl Ord for StackDepth","synthetic":false,"types":[]}];
implementors["chalk_solve"] = [{"text":"impl Ord for SpecializationPriority","synthetic":false,"types":[]},{"text":"impl Ord for InvertedBoundVar","synthetic":false,"types":[]},{"text":"impl&lt;I:&nbsp;Ord + Interner&gt; Ord for UnifiedId&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I::InternedAdtId: Ord,<br>&nbsp;&nbsp;&nbsp;&nbsp;I::DefId: Ord,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;I:&nbsp;Ord + Interner&gt; Ord for EnaVariable&lt;I&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, DefId:&nbsp;Ord, AdtId:&nbsp;Ord&gt; Ord for OrderedItemId&lt;'a, DefId, AdtId&gt;","synthetic":false,"types":[]},{"text":"impl&lt;I:&nbsp;Interner&gt; Ord for RecordedItemId&lt;I&gt;","synthetic":false,"types":[]},{"text":"impl&lt;I:&nbsp;Ord + Interner&gt; Ord for AssociatedTyValueId&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I::DefId: Ord,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Ord for WellKnownTrait","synthetic":false,"types":[]},{"text":"impl Ord for Polarity","synthetic":false,"types":[]},{"text":"impl Ord for ClosureKind","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()