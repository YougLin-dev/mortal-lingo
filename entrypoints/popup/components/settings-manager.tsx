import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import { orpc } from "@/lib/orpc/client";

export const SettingsManager = () => {
  const queryClient = useQueryClient();

  const {
    data: settings,
    isLoading,
    isError,
  } = useQuery(orpc.getSettings.queryOptions());

  const updateSettingsMutation = useMutation(
    orpc.updateSettings.mutationOptions({
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [["getSettings"]] });
      },
    })
  );

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <Skeleton className="h-10 w-full" />
        </CardContent>
      </Card>
    );
  }

  if (isError || !settings) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-destructive text-sm">Failed to load settings</p>
        </CardContent>
      </Card>
    );
  }

  const toggleTranslation = () => {
    updateSettingsMutation.mutate({
      isTranslationActive: !settings.isTranslationActive,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Settings</CardTitle>
        <CardDescription>Manage your translation preferences</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="translation-toggle">Translation Active</Label>
          <Switch
            checked={settings.isTranslationActive}
            disabled={updateSettingsMutation.isPending}
            id="translation-toggle"
            onCheckedChange={toggleTranslation}
          />
        </div>

        <div className="space-y-1 text-muted-foreground text-xs">
          <div>Active Model: {settings.activeModelId || "None"}</div>
          <div>
            Target Language: {settings.translationSettings.targetLanguage}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
